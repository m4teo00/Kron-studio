import type { MouseEvent } from "react";

export function scrollToContact(event: MouseEvent<HTMLAnchorElement>) {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return;

  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
