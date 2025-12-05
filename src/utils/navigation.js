export function navigate(path) {
  const base = import.meta.env.BASE_URL || "/";
  const target = `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  window.history.pushState({}, "", target);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function navigateToSection(sectionId) {
  const base = import.meta.env.BASE_URL || "/";
  const target = `${base.replace(/\/$/, "")}/#${sectionId}`;
  window.history.pushState({}, "", target);
  window.dispatchEvent(new PopStateEvent("popstate"));
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}
