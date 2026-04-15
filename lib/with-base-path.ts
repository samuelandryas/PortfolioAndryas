const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetVersion = process.env.NEXT_PUBLIC_ASSET_VERSION || "2026-04-14-portfolio-fix";

export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  const separator = path.includes("?") ? "&" : "?";
  return `${basePath}${path}${separator}v=${assetVersion}`;
}

export function withBasePathNoVersion(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  return `${basePath}${path}`;
}
