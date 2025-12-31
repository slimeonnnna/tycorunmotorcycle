// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/svg+xml";

// Image generation
export default function Icon() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="tycorun-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2563EB" />
          <stop offset="1" stop-color="#3B82F6" />
        </linearGradient>
      </defs>
      <path fill="url(#tycorun-gradient)" d="M26 6H12.5L6.5 12V15H17L26 6Z" />
      <circle cx="26" cy="6" r="2" fill="#2563EB" />
      <path fill="url(#tycorun-gradient)" d="M6 26H19.5L25.5 20V17H15L6 26Z" />
      <circle cx="6" cy="26" r="2" fill="#3B82F6" />
    </svg>`,
    {
      headers: {
        "content-type": "image/svg+xml",
      },
    }
  );
}