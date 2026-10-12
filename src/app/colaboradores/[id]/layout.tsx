import { collaboratorStaticParams } from "@/lib/staticParams";

export function generateStaticParams() {
  return collaboratorStaticParams();
}

export const dynamicParams = false;

export default function CollaboratorDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
