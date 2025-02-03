export interface SShapeProps extends React.SVGProps<SVGSVGElement> {
  startColor?: string
  endColor?: string
  size?: number
  animationDuration?: number
}

export default function SShape({
  startColor = "#97E45D",
  endColor = "#6297F5",
  size = 92,
  animationDuration = 3,
  ...props
}: SShapeProps) {
  const width = Math.round(size * 0.77)

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 71 92"
      fill="none"
      {...props}
    >
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { stopColor: ${startColor}; }
            50% { stopColor: ${endColor}; }
          }
          .animate-gradient stop {
            animation: gradientShift ${animationDuration}s ease-in-out infinite;
          }
          .animate-gradient stop:nth-child(2) {
            animation-delay: ${-animationDuration / 2}s;
          }
        `}
      </style>
      <path opacity="0.323326" d="M22.1597 10L3 42.0521L33 53.9785L3 91" stroke="url(#paint0_linear_0_26)" strokeWidth="3" />
      <path opacity="0.323326" d="M40.1597 6L21 38.0521L51 49.9785L21 87" stroke="url(#paint1_linear_0_26)" strokeWidth="3" />
      <path opacity="0.323326" d="M57.1597 1L38 33.0521L68 44.9785L38 82" stroke="url(#paint2_linear_0_26)" strokeWidth="3" />
      <defs>
        <linearGradient id="paint0_linear_0_26" x1="3" y1="10" x2="3" y2="91" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
        <linearGradient id="paint1_linear_0_26" x1="21" y1="6" x2="21" y2="87" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
        <linearGradient id="paint2_linear_0_26" x1="38" y1="1" x2="38" y2="82" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}
