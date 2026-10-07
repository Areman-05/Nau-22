import { describe, expect, it } from "vitest";
import {
  getHistoryIntro,
  getManifesto,
  getMilestone,
  listMilestones,
  manifestoBody,
  manifestoLead,
  milestones,
} from "../proyecto";

describe("proyecto", () => {
  it("keeps manifesto bilingual and substantial", () => {
    const es = getManifesto("es");
    const en = getManifesto("en");
    expect(es.lead).toBe(manifestoLead.es);
    expect(en.lead).toBe(manifestoLead.en);
    expect(es.body.length).toBe(manifestoBody.es.length);
    expect(en.body.length).toBe(manifestoBody.en.length);
    expect(es.body.length).toBeGreaterThanOrEqual(4);
    expect(en.body.every((p) => p.length > 40)).toBe(true);
  });

  it("exposes history intro for both locales", () => {
    const es = getHistoryIntro("es");
    const en = getHistoryIntro("en");
    expect(es.title).toBeTruthy();
    expect(en.title).toBeTruthy();
    expect(es.paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(en.paragraphs.length).toBe(es.paragraphs.length);
  });

  it("orders milestones from newest to oldest with mixed achievement lengths", () => {
    const list = listMilestones();
    expect(list).toBe(milestones);
    expect(list[0].year).toBe("2026");
    expect(list.at(-1)?.year).toBe("2018");
    for (let i = 1; i < list.length; i += 1) {
      expect(Number(list[i - 1].year)).toBeGreaterThan(Number(list[i].year));
    }
    expect(getMilestone("2020")?.items.length).toBeGreaterThan(0);
    const lengths = list.flatMap((m) => m.items.map((item) => item.paragraphs.length));
    expect(lengths.some((n) => n === 1)).toBe(true);
    expect(lengths.some((n) => n >= 3)).toBe(true);
  });
});
