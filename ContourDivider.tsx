interface ContourDividerProps {
  flip?: boolean;
  className?: string;
}

/**
 * Flowing, asymmetrical SVG wave/contour divider in soft sage green.
 * Bridges media sections into narrative sections.
 */
export default function ContourDivider({ flip = false, className = "" }: ContourDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="h-[90px] w-full sm:h-[130px] md:h-[170px]"
      >
        <path
          d="M0,96 C180,150 340,40 520,72 C700,104 840,170 1040,138 C1220,110 1330,44 1440,80 L1440,180 L0,180 Z"
          fill="#8FA290"
          fillOpacity="0.14"
        />
        <path
          d="M0,120 C200,70 360,150 560,120 C760,90 900,30 1100,66 C1260,95 1360,140 1440,116 L1440,180 L0,180 Z"
          fill="#8FA290"
          fillOpacity="0.22"
        />
        <path
          d="M0,96 C180,150 340,40 520,72 C700,104 840,170 1040,138 C1220,110 1330,44 1440,80"
          fill="none"
          stroke="#8FA290"
          strokeWidth="2"
          strokeOpacity="0.55"
        />
      </svg>
    </div>
  );
}
