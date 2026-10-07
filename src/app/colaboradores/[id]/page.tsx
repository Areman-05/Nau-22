"use client";

import { notFound, useParams } from "next/navigation";
import { PersonDetail } from "@/components/PersonDetail";
import { getCollaborator } from "@/data";

export default function CollaboratorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const person = getCollaborator(id);
  if (!person) notFound();
  return <PersonDetail person={person} backHref="/artistas" />;
}
