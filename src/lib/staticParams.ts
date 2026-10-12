import {
  getArtistSlugs,
  getCollaboratorSlugs,
  getExhibitionIds,
  listNews,
} from "@/data";

export function artistStaticParams() {
  return getArtistSlugs().map((id) => ({ id }));
}

export function collaboratorStaticParams() {
  return getCollaboratorSlugs().map((id) => ({ id }));
}

export function exhibitionStaticParams() {
  return getExhibitionIds().map((id) => ({ id }));
}

export function newsStaticParams() {
  return listNews().map((item) => ({ id: item.id }));
}
