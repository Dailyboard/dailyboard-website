// Run in the browser console on any built blog article, at desktop and phone widths.
// Exercises the real DOM without dependencies; throws on a regression.
(async () => {
  const assert = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const tick = () => new Promise((resolve) => setTimeout(resolve, 50));
  const dialog = document.querySelector("[data-blog-image-viewer]");
  const images = [
    ...document.querySelectorAll("[data-blog-article] img[data-enlarge]"),
  ];
  assert(images.length > 0, "Article images must be enhanced");
  if (dialog.open) {
    dialog.close();
    await tick();
  }
  document.dispatchEvent(new Event("astro:page-load"));
  document.dispatchEvent(new Event("astro:page-load"));
  const overflow = document.documentElement.style.overflow;
  for (const image of images) {
    image.focus();
    image.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    assert(dialog.open, "Keyboard opens image after repeated page-load events");
    const preview = dialog.querySelector("[data-viewer-image]");
    await preview.decode();
    assert(
      preview.currentSrc === image.currentSrc,
      "Viewer uses original image",
    );
    assert(preview.alt === image.alt, "Viewer retains alt text");
    const zoom = dialog.querySelector("[data-zoom]");
    zoom.click();
    assert(
      zoom.getAttribute("aria-pressed") === "true",
      "Zoom state is accessible",
    );
    assert(
      preview.getBoundingClientRect().width === preview.naturalWidth,
      "Zoom exposes full resolution",
    );
    zoom.click();
    assert(
      preview.getBoundingClientRect().width <= dialog.clientWidth,
      "Fit stays within dialog",
    );
    dialog.querySelector("[data-close]").click();
    await tick();
    assert(
      !dialog.open && document.activeElement === image,
      "Close restores image focus",
    );
    assert(
      document.documentElement.style.overflow === overflow,
      "Close restores page scrolling",
    );
  }
  assert(
    document.documentElement.scrollWidth <= innerWidth,
    "Page has no horizontal overflow",
  );
  console.log(
    JSON.stringify({
      result: "PASS",
      images: images.length,
      viewport: [innerWidth, innerHeight],
      textWidth: document.querySelector(".prose").getBoundingClientRect().width,
    }),
  );
})();
