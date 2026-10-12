import { artistStaticParams } from "@/lib/staticParams";

export function generateStaticParams() {
  return artistStaticParams();
}

export const dynamicParams = false;

export default function ArtistDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
