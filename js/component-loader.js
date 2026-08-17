// ==========================================================================
// ASYNCHRONOUS COMPONENT LOADER & TRANSLATION CONNECTOR
// ==========================================================================

document.addEventListener("DOMContentLoaded", async () => {
  const mounts = document.querySelectorAll("[data-component]");

  if (mounts.length === 0) return;

  // 1. Fetch all components in parallel for maximum loading speed
  const loadPromises = Array.from(mounts).map(async (el) => {
    const componentName = el.getAttribute("data-component");
    if (!componentName) return;

    try {
      const res = await fetch(`./components/${componentName}.html`);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        console.warn(`Component not found: ./components/${componentName}.html`);
      }
    } catch (err) {
      console.error(`Failed to load component: ${componentName}`, err);
    }
  });

  // 2. Wait for ALL components to finish injecting into the DOM
  await Promise.all(loadPromises);

  // 3. Notify app listeners (like main.js) that dynamic components are ready
  window.dispatchEvent(new CustomEvent("componentsLoaded"));

  // 4. Immediate translation sync and RTL enforcement
  const currentLang = localStorage.getItem("site_lang") || "en";

  // Safety net: Enforce RTL document direction instantly if Arabic is cached
  if (currentLang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }

  // Trigger dictionary updates if the functions are already exposed
  if (typeof window.applyTranslations === "function") {
    window.applyTranslations(currentLang);
  } else if (typeof window.updateTranslations === "function") {
    window.updateTranslations();
  }
});
