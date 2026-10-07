/**
 * Public data catalog for Nau 22.
 * Pages and components should prefer this module (or the focused domain files).
 */

export type {
  Achievement,
  ArchiveWork,
  Artist,
  Collaborator,
  Exhibition,
  ExhibitionStatus,
  ExhibitionWork,
  GalleryConfig,
  GalleryHours,
  Milestone,
  NewsItem,
  PersonImage,
} from "./types";

export {
  gallery,
  getGallery,
  getGalleryContactHref,
  getGalleryPhoneHref,
} from "./gallery";

export { paint, unsplash, works } from "./media";

export {
  artists,
  getArtist,
  getArtistSlugs,
  listArtists,
  requireArtist,
} from "./artists";

export {
  collaborators,
  getCollaborator,
  getCollaboratorSlugs,
  listCollaborators,
  requireCollaborator,
} from "./collaborators";

export {
  exhibitions,
  getCurrentExhibition,
  getExhibition,
  getExhibitionIds,
  getExhibitionsByStatus,
  getExhibitionsForArtist,
  listExhibitions,
  requireExhibition,
} from "./exhibitions";

export {
  exhibitionWorks,
  getExhibitionWorks,
  listExhibitionWorkIds,
} from "./exhibitionWorks";

export {
  getArchiveTitleSlugs,
  getArchiveWorks,
  hasCuratedArchive,
} from "./archiveWorks";

export {
  getLatestNews,
  getNews,
  getNewsByCategory,
  listNews,
  news,
  requireNews,
} from "./news";

export {
  getHistoryIntro,
  getManifesto,
  getMilestone,
  historyIntro,
  listMilestones,
  manifestoBody,
  manifestoLead,
  milestones,
} from "./proyecto";

export {
  assertDataIntegrity,
  collectIntegrityIssues,
  type IntegrityIssue,
} from "./integrity";
