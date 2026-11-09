import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = process.env.BASELINE_URL || 'http://127.0.0.1:3000';
const outputDirectory = path.join(process.cwd(), 'output', 'playwright', 'baseline');
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const sectionIds = [
  'about',
  'what-we-do',
  'values',
  'upcoming-initiatives',
  'volunteer-with-us',
  'contact',
];

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const baseline = {
  capturedAt: new Date().toISOString(),
  baseUrl,
  measurements: {},
};

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      colorScheme: 'light',
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    await page.addInitScript(() => {
      globalThis.__baselineWebVitals = { cls: 0, lcp: 0 };

      new PerformanceObserver(entryList => {
        const entries = entryList.getEntries();
        const latestEntry = entries.at(-1);
        if (latestEntry) globalThis.__baselineWebVitals.lcp = latestEntry.startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      new PerformanceObserver(entryList => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) globalThis.__baselineWebVitals.cls += entry.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });

    await page.goto(baseUrl, { waitUntil: 'load', timeout: 30_000 });
    await page.evaluate(() =>
      Promise.race([
        document.fonts.ready,
        new Promise(resolve => window.setTimeout(resolve, 5_000)),
      ])
    );
    await page.waitForTimeout(1000);

    baseline.measurements[viewport.name] = await page.evaluate(ids => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const resources = performance.getEntriesByType('resource');
      const firstContentfulPaint = performance
        .getEntriesByType('paint')
        .find(entry => entry.name === 'first-contentful-paint');

      const resourceSummary = resources.reduce(
        (summary, resource) => {
          const type = resource.initiatorType || 'other';
          const current = summary.byType[type] || { count: 0, transferBytes: 0 };
          current.count += 1;
          current.transferBytes += resource.transferSize || 0;
          summary.byType[type] = current;
          summary.totalCount += 1;
          summary.totalTransferBytes += resource.transferSize || 0;
          return summary;
        },
        { totalCount: 0, totalTransferBytes: 0, byType: {} }
      );

      return {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        document: {
          scrollWidth: document.documentElement.scrollWidth,
          scrollHeight: document.documentElement.scrollHeight,
          hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
        },
        navigation: navigation
          ? {
              timeToFirstByteMs: navigation.responseStart,
              domContentLoadedMs: navigation.domContentLoadedEventEnd,
              loadEventMs: navigation.loadEventEnd,
              durationMs: navigation.duration,
            }
          : null,
        webVitals: {
          firstContentfulPaintMs: firstContentfulPaint?.startTime ?? null,
          largestContentfulPaintMs: globalThis.__baselineWebVitals.lcp,
          cumulativeLayoutShift: globalThis.__baselineWebVitals.cls,
        },
        resources: resourceSummary,
        sections: Object.fromEntries(
          ids.map(id => {
            const element = document.getElementById(id);
            if (!element) return [id, null];
            const rect = element.getBoundingClientRect();
            return [
              id,
              {
                top: Math.round(rect.top + window.scrollY),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
              },
            ];
          })
        ),
      };
    }, sectionIds);

    await context.close();
  }
} finally {
  await browser.close();
}

const outputPath = path.join(outputDirectory, 'metrics.json');
await writeFile(outputPath, `${JSON.stringify(baseline, null, 2)}\n`, 'utf8');
console.log(`Baseline metrics written to ${outputPath}`);
