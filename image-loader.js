"use client";

export default function myImageLoader({ src, width, quality }) {
  if (process.env.NODE_ENV !== "production") {
    return src;
  }
  if (src.startsWith("https://") || src.startsWith("http://")) {
    return src;
  }
  return `/${process.env.nextImageExportOptimizer_exportFolderName}${src}?width=${width}&quality=${quality || 75}`;
}
