import { describe, expect, it } from "vitest";
import {
  getLatestNews,
  getNews,
  getNewsByCategory,
  listNews,
  news,
  requireNews,
} from "../news";

describe("news / journal", () => {
  it("lists journal entries with unique ids", () => {
    const list = listNews();
    expect(list.length).toBeGreaterThan(10);
    expect(list).toBe(news);
    const ids = list.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("resolves entries and latest window for home", () => {
    const first = news[0];
    expect(getNews(first.id)?.title).toBe(first.title);
    expect(requireNews(first.id)).toEqual(first);
    expect(getLatestNews(7)).toHaveLength(7);
    expect(getLatestNews(7)[0].id).toBe(first.id);
    expect(() => requireNews("n-missing")).toThrow(/not found/i);
  });

  it("filters by category in both locales", () => {
    const sample = news.find((item) => item.category.trim());
    expect(sample).toBeTruthy();
    if (!sample) return;
    const byEs = getNewsByCategory(sample.category);
    const byEn = getNewsByCategory(sample.categoryEn);
    expect(byEs.length).toBeGreaterThan(0);
    expect(byEn.length).toBeGreaterThan(0);
    expect(byEs.some((item) => item.id === sample.id)).toBe(true);
  });
});
