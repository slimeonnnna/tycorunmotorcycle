export function withBasePath(path: string) {
  if (!path) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return path;
  const normalizedBase = basePath.replace(/\/+$/, "");
  if (!normalizedBase) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
