import { expect, test } from '@playwright/test';

test.describe('website smoke flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/_next/image**', route => route.abort());
    await page.route('https://static.thesolaceinitiative.org/**', route => route.abort());
  });

  test('preserves real section navigation and emergency contact links', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(/The Solace Healing and Empowerment Initiative/);
    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
    await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeVisible();
    await expect(page.locator('a button, button a')).toHaveCount(0);
    await expect(
      page.getByText(/Please avoid sharing highly sensitive or graphic details here/)
    ).toHaveCount(2);

    const contactLink = page.locator('header a[href="/#contact"]').first();
    await expect(contactLink).toBeVisible();
    await contactLink.click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('#contact')).toBeInViewport();
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)
    ).toBe(true);
  });

  test('supports keyboard-accessible mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await menuButton.click();
    await expect(page.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await expect(page.locator('#mobile-navigation')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeFocused();
    await expect(page.locator('#mobile-navigation')).toHaveCount(0);

    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await page.locator('#mobile-navigation a[href="/#contact"]').click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('#mobile-navigation')).toHaveCount(0);
  });

  test('shows scroll reveals immediately when reduced motion is requested', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.locator('#values').scrollIntoViewIfNeeded();

    await expect(page.locator('#values .motion-reveal').first()).toHaveCSS('opacity', '1');
    await expect(page.locator('#values .motion-reveal').first()).toHaveCSS('transform', 'none');
  });

  test('submits both forms through a mocked transport without sending email', async ({ page }) => {
    await page.route('**/api/send-company-mail', async route => {
      await new Promise(resolve => setTimeout(resolve, 1_000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Mail sent successfully' }),
      });
    });
    await page.goto('/#volunteer-with-us', { waitUntil: 'domcontentloaded' });

    const volunteerForm = page.getByRole('form', { name: 'Volunteer form' });
    await volunteerForm.locator('input[name="fullName"]').fill('Test Volunteer');
    await volunteerForm.locator('input[name="email"]').fill('test@example.com');
    await volunteerForm.locator('input[name="phoneNumber"]').fill('+234 703 246 4928');
    await volunteerForm.locator('[role="combobox"]').nth(0).click();
    await page.getByRole('option', { name: 'Mentoring & Counseling' }).click();
    await volunteerForm.locator('[role="combobox"]').nth(1).click();
    await page.getByRole('option', { name: 'Weekends only' }).click();

    const volunteerSubmit = volunteerForm.getByRole('button', { name: 'Submit Application' });
    await volunteerSubmit.click();
    await expect(volunteerSubmit).toBeDisabled();
    await expect(volunteerForm.getByRole('status')).toHaveText('Mail sent successfully');

    const contactForm = page.getByRole('form', { name: 'Contact form' });
    await contactForm.locator('input[name="fullName"]').fill('Test Contact');
    await contactForm.locator('input[name="email"]').fill('test@example.com');
    await contactForm.locator('input[name="phoneNumber"]').fill('+234 703 246 4928');
    await contactForm.locator('input[name="subject"]').fill('A test subject');
    await contactForm
      .locator('textarea[name="message"]')
      .fill('This is a safe browser smoke test.');
    await contactForm.getByRole('button', { name: 'Send Message' }).click();
    await expect(contactForm.getByRole('status')).toHaveText('Mail sent successfully');
  });
});
