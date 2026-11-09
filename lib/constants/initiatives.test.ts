import { describe, expect, it } from 'vitest';
import { getInitiativeBySlug, INITIATIVES } from './texts';

describe('initiative content', () => {
  it('includes Street to Skills with the flyer name and banner', () => {
    const initiative = getInitiativeBySlug('street-to-skills');

    expect(initiative).toMatchObject({
      title: 'Street to Skills',
      bannerImage: '/images/initiatives/street-to-skills/street-to-skills-flyer.jpg',
      status: 'Upcoming',
    });
  });

  it('exposes the launch event and Menstrual Health as detail projects', () => {
    expect(
      INITIATIVES.filter(initiative => initiative.detail).map(initiative => initiative.slug)
    ).toEqual(['launch-event', 'menstrual-health']);
  });

  it('uses the uploaded static card images for the launch and menstrual health initiatives', () => {
    expect(getInitiativeBySlug('launch-event')?.bannerImage).toBe(
      '/images/home/launch-event-card.jpg'
    );
    expect(getInitiativeBySlug('menstrual-health')?.bannerImage).toBe(
      '/images/home/mental-health-initiative-card.jpg'
    );
  });

  it('includes the launch event gallery and supporting detail content', () => {
    const initiative = getInitiativeBySlug('launch-event');
    const markdown = initiative?.detail?.contentMarkdown;

    expect(markdown).toContain(
      '## From Shadows to Strength: The SHE Initiative Officially Launches in Abuja'
    );
    expect(markdown).toContain('**Maryam Gimba, Esq., Founder of The SHE Initiative**');
    expect(markdown).toContain('- **Mrs. Yewande Gbola-Awopetu, Esq.**');
    expect(initiative?.detail?.facts).toHaveLength(3);
    expect(initiative?.detail?.gallery).toHaveLength(10);
    expect(initiative?.detail?.gallery?.every(image => image.src && image.alt)).toBe(true);
    expect(initiative?.detail?.gallery?.map(image => image.src)).toEqual([
      '/images/initiatives/launch-event-1.jpg',
      '/images/initiatives/launch-event-2.jpg',
      ...Array.from(
        { length: 8 },
        (_, index) => `/images/initiatives/launch-initiative-${index + 3}.jpg`
      ),
    ]);
  });

  it('keeps the sample gallery within the supported maximum', () => {
    const initiative = getInitiativeBySlug('menstrual-health');

    expect(initiative?.detail?.gallery).toHaveLength(10);
    expect(initiative?.detail?.gallery.every(image => image.src && image.alt)).toBe(true);
    expect(initiative?.detail?.gallery.map(image => image.src)).toEqual(
      Array.from(
        { length: 10 },
        (_, index) => `/images/initiatives/menstrual-health-initiative-${index + 1}.jpg`
      )
    );
  });
});
