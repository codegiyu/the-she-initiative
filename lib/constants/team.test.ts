import { describe, expect, it } from 'vitest';
import { TEAM_MEMBERS } from './team';

describe('team content', () => {
  it('defines all four members with updated portraits and complete card content', () => {
    expect(TEAM_MEMBERS).toHaveLength(4);
    expect(TEAM_MEMBERS.every(member => member.name && member.title && member.image)).toBe(true);
    expect(new Set(TEAM_MEMBERS.map(member => member.id)).size).toBe(TEAM_MEMBERS.length);
    expect(TEAM_MEMBERS.map(member => member.name)).toEqual([
      'Maryam A. Gimba, Esq.',
      'Joan Titami Ibrahim, Esq.',
      'Sakeena I.U. Bello, Esq.',
      'Hafsah Garba Jibrin',
    ]);
    expect(TEAM_MEMBERS[3].title).toBe('Program Director');
  });

  it('uses local public image paths for each member', () => {
    expect(TEAM_MEMBERS.every(member => member.image.startsWith('/images/'))).toBe(true);
  });
});
