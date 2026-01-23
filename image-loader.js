"use client";

export default function myImageLoader({ src, width, quality }) {
  if (process.env.NODE_ENV !== "production") {
    return src;
  }
  if (src.startsWith("https://") || src.startsWith("http://")) {
    return src;
  }
  const exportFolderName =
    process.env.nextImageExportOptimizer_exportFolderName ||
    "nextImageExportOptimizer";
  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;
  const parts = normalizedSrc.split("/");
  const filenameWithExtension = parts.pop() || "";
  const path = parts.length ? `${parts.join("/")}/` : "";
  const extension = filenameWithExtension.split(".").pop() || "";
  const filename = filenameWithExtension.slice(
    0,
    Math.max(0, filenameWithExtension.lastIndexOf(".")),
  );
  const useWebp =
    process.env.nextImageExportOptimizer_storePicturesInWEBP === "true";
  const processedExtension =
    useWebp && ["jpg", "jpeg", "png", "gif"].includes(extension.toLowerCase())
      ? "WEBP"
      : extension.toUpperCase();
  return `/${path}${exportFolderName}/${filename}-opt-${width}.${processedExtension}`;
}
