type Props = {
  /** the color that should appear at the top of the divider (matches the section above) */
  topColor: string;
  /** the color that should appear at the bottom of the divider (matches the section below) */
  bottomColor: string;
  variant?: "wave" | "curve" | "tilt";
  flip?: boolean;
};

export function SectionDivider({
  topColor,
  bottomColor,
  variant = "wave",
  flip = false,
}: Props) {
  const paths = {
    wave: "M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,64 L1440,128 L0,128 Z",
    curve: "M0,0 C480,128 960,128 1440,0 L1440,128 L0,128 Z",
    tilt: "M0,0 L1440,64 L1440,128 L0,128 Z",
  } as const;

  return (
    <div
      className="relative w-full"
      style={{ background: topColor, height: 80, marginTop: -1 }}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
        aria-hidden="true"
      >
        <path d={paths[variant]} fill={bottomColor} />
      </svg>
    </div>
  );
}
