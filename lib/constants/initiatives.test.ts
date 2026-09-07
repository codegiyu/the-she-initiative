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

  it('exposes only Menstrual Health as a detail project for now', () => {
    expect(
      INITIATIVES.filter(initiative => initiative.detail).map(initiative => initiative.slug)
    ).toEqual(['menstrual-health']);
  });

  it('uses the uploaded static card images for the launch and menstrual health initiatives', () => {
    expect(getInitiativeBySlug('launch-event')?.bannerImage).toBe(
      'https://pub-9a70d77786454bfa9e5d93bfdeb5548c.r2.dev/images/home/launch-event-card.jpg'
    );
    expect(getInitiativeBySlug('menstrual-health')?.bannerImage).toBe(
      'https://pub-9a70d77786454bfa9e5d93bfdeb5548c.r2.dev/images/home/mental-health-initiative-card.jpg'
    );
  });

  it('keeps the sample gallery within the supported maximum', () => {
    const initiative = getInitiativeBySlug('menstrual-health');

    expect(initiative?.detail?.gallery).toHaveLength(10);
    expect(initiative?.detail?.gallery.every(image => image.src && image.alt)).toBe(true);
    expect(initiative?.detail?.gallery.map(image => image.src)).toEqual(
      Array.from(
        { length: 10 },
        (_, index) =>
          `https://pub-9a70d77786454bfa9e5d93bfdeb5548c.r2.dev/images/initiatives/menstrual-health-initiative-${index + 1}.jpg`
      )
    );
  });
});
