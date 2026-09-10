import { describe, expect, it } from 'vitest';
import { TEAM_MEMBERS } from './team';

describe('team content', () => {
  it('defines five members with complete card content', () => {
    expect(TEAM_MEMBERS).toHaveLength(5);
    expect(TEAM_MEMBERS.every(member => member.name && member.title && member.image)).toBe(true);
    expect(new Set(TEAM_MEMBERS.map(member => member.id)).size).toBe(TEAM_MEMBERS.length);
  });

  it('uses local public image paths for each member', () => {
    expect(TEAM_MEMBERS.every(member => member.image.startsWith('/images/'))).toBe(true);
  });
});
