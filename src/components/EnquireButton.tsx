"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { gallery } from "@/data";
import { useLocale } from "@/context/LocaleContext";
import { useIsClient } from "@/lib/useIsClient";

export type EnquireContext = {
  work?: string;
  artist?: string;
  exhibition?: string;
  collaborator?: string;
};

function buildMail(context: EnquireContext | undefined, name: string, email: string, message: string, locale: "es" | "en") {
  const topic = context?.work ?? context?.collaborator ?? context?.artist ?? context?.exhibition ?? "";
  const subject = topic
    ? `${locale === "es" ? "Consulta" : "Enquiry"}: ${topic}`
    : locale === "es"
      ? "Consulta — Nau 22"
      : "Enquiry — Nau 22";
  const meta = [
    `${locale === "es" ? "Nombre" : "Name"}: ${name}`,
    `Email: ${email}`,
    context?.exhibition ? `${locale === "es" ? "Exposición" : "Exhibition"}: ${context.exhibition}` : null,
    context?.artist ? `${locale === "es" ? "Artista" : "Artist"}: ${context.artist}` : null,
    context?.work ? `${locale === "es" ? "Obra" : "Work"}: ${context.work}` : null,
    context?.collaborator ? `${locale === "es" ? "Colaborador" : "Collaborator"}: ${context.collaborator}` : null,
  ].filter((line): line is string => Boolean(line));
  const body = `${meta.join("\n")}\n\n${message}`;
  return { subject, body, href: `mailto:${gallery.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}

export function EnquireButton({
  context,
  variant = "arrow",
  label,
  className = "",
}: {
  context?: EnquireContext;
  variant?: "arrow" | "line";
  label?: string;
  className?: string;
}) {
  const { locale } = useLocale();
  const formId = useId();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mounted = useIsClient();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const defaultLabel =
    label ??
    (variant === "line"
      ? locale === "es"
        ? "Contactar"
        : "Contact"
      : locale === "es"
        ? "Consultar"
        : "Enquire");

  const topic = context?.work ?? context?.collaborator ?? context?.artist ?? context?.exhibition;

  function reset() {
    setSent(false);
    setName("");
    setEmail("");
    setMessage("");
  }

  function handleOpen() {
    reset();
    setOpen(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mail = buildMail(context, name.trim(), email.trim(), message.trim(), locale);
    window.location.href = mail.href;
    setSent(true);
  }

  return (
    <>
      <button type="button" onClick={handleOpen} className={className || undefined}>
        {variant === "line" ? (
          <span className="group inline-flex items-center gap-4 w-fit font-sans text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors duration-300">
            <span>{defaultLabel}</span>
            <span className="w-6 h-px bg-foreground/30 group-hover:w-10 group-hover:bg-accent transition-all duration-500 ease-out" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground hover:text-accent transition-colors group/btn">
            <span>{defaultLabel}</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
            />
          </span>
        )}
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-8">
              <button
                type="button"
                aria-label={locale === "es" ? "Cerrar" : "Close"}
                className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${formId}-title`}
                className="relative z-10 w-full md:max-w-lg bg-background px-6 py-10 md:px-12 md:py-14 max-h-[90vh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
                  aria-label={locale === "es" ? "Cerrar" : "Close"}
                >
                  <X size={20} strokeWidth={1.5} />
                </button>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Nau 22</p>
                <h2
                  id={`${formId}-title`}
                  className="font-serif text-4xl md:text-5xl tracking-tight uppercase leading-none mb-4"
                >
                  {locale === "es" ? "Consulta" : "Enquiry"}
                </h2>
                {topic ? (
                  <p className="font-serif text-xl italic text-foreground/70 mb-10">{topic}</p>
                ) : (
                  <p className="font-sans text-sm text-foreground/60 mb-10">
                    {locale === "es"
                      ? "Disponibilidad, visitas o prensa."
                      : "Availability, visits or press."}
                  </p>
                )}

                {sent ? (
                  <div className="flex flex-col gap-6">
                    <p className="font-sans text-base text-foreground/80 leading-relaxed">
                      {locale === "es"
                        ? "Si no se abre tu correo, escríbenos directamente. El asunto y el mensaje ya están preparados."
                        : "If your mail app does not open, write to us directly. The subject and message are already prepared."}
                    </p>
                    <a
                      href={`mailto:${gallery.email}`}
                      className="font-sans text-sm uppercase tracking-[0.15em] font-semibold text-accent hover:text-foreground transition-colors"
                    >
                      {gallery.email}
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-4 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground hover:text-accent transition-colors w-fit"
                    >
                      {locale === "es" ? "Cerrar" : "Close"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <label className="flex flex-col gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {locale === "es" ? "Nombre" : "Name"}
                      </span>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-0 border-b border-foreground/20 py-3 font-sans text-sm outline-none focus:border-accent transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-0 border-b border-foreground/20 py-3 font-sans text-sm outline-none focus:border-accent transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {locale === "es" ? "Mensaje" : "Message"}
                      </span>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-transparent border-0 border-b border-foreground/20 py-3 font-sans text-sm outline-none focus:border-accent transition-colors resize-none"
                      />
                    </label>
                    <button
                      type="submit"
                      className="self-start inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      <span>{locale === "es" ? "Enviar consulta" : "Send enquiry"}</span>
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </button>
                  </form>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
