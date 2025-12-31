export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <svg
          className="max-w-none"
          width="1440"
          height="800"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="engineering-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-800"
              />
            </pattern>
          </defs>
          
          {/* Main Grid */}
          <rect width="1440" height="800" fill="url(#engineering-grid)" opacity="0.3" />
          
          {/* Accent Lines - Schematic Flow */}
          <path
            d="M300 0 V 300 L 500 500 H 1140"
            fill="none"
            stroke="url(#gradient-line-1)"
            strokeWidth="2"
            strokeDasharray="10 5"
            opacity="0.4"
          />
          <path
            d="M1140 0 V 200 L 940 400 H 300"
            fill="none"
            stroke="url(#gradient-line-2)"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          <defs>
            <linearGradient id="gradient-line-1" x1="300" y1="0" x2="1140" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F2937" stopOpacity="0" />
              <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="1" stopColor="#1F2937" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-line-2" x1="1140" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F2937" stopOpacity="0" />
              <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="1" stopColor="#1F2937" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -translate-x-1/2 opacity-20"
            aria-hidden="true"
          >
             {/* Secondary Isometric Structure */}
             <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 100 L600 200 L400 300 L200 200 Z" stroke="#374151" strokeWidth="1"/>
                <path d="M400 300 V 500" stroke="#374151" strokeWidth="1"/>
                <path d="M200 200 V 400 L400 500" stroke="#374151" strokeWidth="1"/>
                <path d="M600 200 V 400 L400 500" stroke="#374151" strokeWidth="1"/>
                {/* Data Points */}
                <circle cx="400" cy="100" r="3" fill="#2563EB" />
                <circle cx="600" cy="200" r="3" fill="#2563EB" />
                <circle cx="200" cy="200" r="3" fill="#2563EB" />
                <circle cx="400" cy="500" r="3" fill="#2563EB" />
             </svg>
          </div>
        </>
      )}
    </>
  );
}