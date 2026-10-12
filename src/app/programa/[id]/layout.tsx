import { exhibitionStaticParams } from "@/lib/staticParams";

export function generateStaticParams() {
  return exhibitionStaticParams();
}

export const dynamicParams = false;

export default function ExhibitionDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
