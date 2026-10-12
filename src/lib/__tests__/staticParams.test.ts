import { describe, expect, it } from "vitest";
import { getArtistSlugs, getCollaboratorSlugs, getExhibitionIds, listNews } from "@/data";
import {
  artistStaticParams,
  collaboratorStaticParams,
  exhibitionStaticParams,
  newsStaticParams,
} from "../staticParams";

describe("static params", () => {
  it("enumerates every catalog route for the static export", () => {
    expect(artistStaticParams().map((p) => p.id)).toEqual(getArtistSlugs());
    expect(collaboratorStaticParams().map((p) => p.id)).toEqual(getCollaboratorSlugs());
    expect(exhibitionStaticParams().map((p) => p.id)).toEqual(getExhibitionIds());
    expect(newsStaticParams().map((p) => p.id)).toEqual(listNews().map((item) => item.id));
  });
});
