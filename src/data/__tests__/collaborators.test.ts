import { describe, expect, it } from "vitest";
import {
  collaborators,
  getCollaborator,
  getCollaboratorSlugs,
  listCollaborators,
  requireCollaborator,
} from "../collaborators";

describe("collaborators", () => {
  it("lists collaborators with unique slugs", () => {
    const list = listCollaborators();
    expect(list.length).toBeGreaterThan(2);
    expect(list).toBe(collaborators);
    const slugs = getCollaboratorSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("resolves collaborators by slug", () => {
    const first = collaborators[0];
    expect(getCollaborator(first.slug)?.name).toBe(first.name);
    expect(requireCollaborator(first.slug)).toEqual(first);
    expect(() => requireCollaborator("missing-collab")).toThrow(/not found/i);
  });

  it("keeps bilingual role and at least one image", () => {
    for (const collaborator of collaborators) {
      expect(collaborator.role.trim()).not.toBe("");
      expect(collaborator.roleEn.trim()).not.toBe("");
      expect(collaborator.images.length).toBeGreaterThan(0);
    }
  });
});
