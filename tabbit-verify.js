await page.goto("http://127.0.0.1:5173/", { waitUntil: "domcontentloaded" });

await expect(page.getByRole("heading", { name: "Gowri Shankar" })).toBeVisible({
  timeout: 20000,
});

const heroSources = await page.locator(".portrait-display img").evaluateAll((images) =>
  images.map((image) => image.getAttribute("src")),
);
if (!heroSources.some((src) => src && src.includes("bg-2"))) {
  throw new Error("bg-2 hero image was not rendered.");
}

await page.getByLabel("Classified Mission Files").click();
await expect(page.getByRole("heading", { name: "Classified Mission Files" })).toBeVisible();

const firstProject = page.locator(".project-box").first();
await expect(firstProject.getByRole("heading", { name: "Code-Duel" })).toBeVisible();
const firstCover = await firstProject.locator(".project-media").getAttribute("src");
if (!firstCover || !firstCover.includes("code-duel-cover")) {
  throw new Error("Code-Duel cover image was not rendered.");
}

await firstProject.locator(".project-media-button").click();
const firstPreview = await firstProject.locator(".project-media").getAttribute("src");
if (!firstPreview || !firstPreview.includes("code-duel-video")) {
  throw new Error("Code-Duel video preview asset was not rendered after opening preview.");
}
await expect(firstProject.getByRole("button", { name: "GitHub" })).toBeVisible();
await expect(firstProject.getByRole("button", { name: "Live Demo" })).toBeVisible();

await page.getByLabel("Service Record").click();
await expect(page.getByRole("heading", { name: "Resume Scroll" })).toBeVisible();
const resumeHref = await page.getByRole("link", { name: "Download Resume" }).getAttribute("href");
if (!resumeHref || !resumeHref.includes("Gowri-S")) {
  throw new Error("Resume download URL was not rendered.");
}
const embeddedPdfCount = await page.locator("iframe, embed, object").count();
if (embeddedPdfCount !== 0) {
  throw new Error("Resume PDF is embedded in the page.");
}

await page.getByLabel("Mission Terminal").click();
await expect(page.locator(".contact-text.mission-quote")).toBeVisible();
const animatedFormContentCount = await page.locator(".contact-form .mission-quote").count();
if (animatedFormContentCount !== 0) {
  throw new Error("Mission Terminal form content received the quote animation class.");
}

await page.getByLabel("Archive Links").click();
await expect(page.locator(".footer-main-label", { hasText: "Gowri Shankar" })).toBeVisible();
const footerPairsAttached = await page.evaluate(() =>
  Array.from(document.querySelectorAll(".footer-kunai-pair")).every(
    (pair) => pair.querySelector(".footer-kunai") && (pair.querySelector(".footer-main-label") || pair.querySelector(".footer-link")),
  ),
);
if (!footerPairsAttached) {
  throw new Error("Footer labels are not attached to their kunai wrapper.");
}

return {
  verified: true,
  heroSources,
  firstCover,
  firstPreview,
  resumeHref,
  footerPairCount: await page.locator(".footer-kunai-pair").count(),
};
