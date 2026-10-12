import { newsStaticParams } from "@/lib/staticParams";

export function generateStaticParams() {
  return newsStaticParams();
}

export const dynamicParams = false;

export default function NewsDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
