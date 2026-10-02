"use client";

import { notFound, useParams } from "next/navigation";
import { PersonDetail } from "@/components/PersonDetail";
import { getArtist } from "@/data/artists";

export default function ArtistDetailPage() {
  const { id } = useParams<{ id: string }>();
  const person = getArtist(id);
  if (!person) notFound();
  return <PersonDetail person={person} backHref="/artistas" />;
}
