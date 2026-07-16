/** Prefix a public/ asset path with Vite's base URL (required for GitHub Pages). */
export function assetUrl(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
