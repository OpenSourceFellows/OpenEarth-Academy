type CardIconProps = {
  icon: "gis" | "reforestation" | "conservation" | "energy" | "water" | "crowd";
  label: string;
  size?: number;
  className?: string;
};

export const CardIcon = ({
  icon,
  label,
  size = 40,
  className = "",
}: CardIconProps) => {
  switch (icon) {
    case "gis":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <circle cx="20" cy="20" r="18" stroke="#689F38" strokeWidth="4" />
          <rect
            x="10"
            y="10"
            width="20"
            height="20"
            stroke="#689F38"
            strokeWidth="2"
            fill="#E0F2F1"
          />
        </svg>
      );
    case "reforestation":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <circle cx="20" cy="28" r="8" fill="#A5D6A7" />
          <rect x="19" y="10" width="2" height="18" fill="#8D6E63" />
        </svg>
      );
    case "conservation":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <rect x="8" y="8" width="24" height="24" rx="12" fill="#FFF9C4" />
          <path d="M20 17v6" stroke="#FBC02D" strokeWidth="2" />
          <circle cx="20" cy="15" r="2" fill="#FBC02D" />
        </svg>
      );
    case "energy":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <rect x="8" y="8" width="24" height="24" rx="6" fill="#B3E5FC" />
          <polygon points="20,13 26,27 14,27" fill="#0288D1" />
        </svg>
      );
    case "water":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <ellipse cx="20" cy="28" rx="10" ry="4" fill="#B3E5FC" />
          <path d="M20 8c5 8 10 14 0 20" stroke="#0288D1" strokeWidth="2" />
        </svg>
      );
    case "crowd":
      return (
        <svg
          role="img"
          aria-label={label}
          width={size}
          height={size}
          className={className}
          viewBox="0 0 40 40"
          fill="none"
        >
          <title>{label}</title>
          <circle cx="12" cy="28" r="6" fill="#E1BEE7" />
          <circle cx="28" cy="28" r="6" fill="#CE93D8" />
          <rect x="10" y="12" width="20" height="6" fill="#8E24AA" />
        </svg>
      );
    default:
      return null;
  }
};
