interface EightShapeProps extends React.SVGProps<SVGSVGElement> {
  startColor?: string
  endColor?: string
  animationDuration?: number
  size?: number
}

export default function EightShape({
  startColor = "#00437B",
  endColor = "#6297F5",
  animationDuration = 3,
  size = 131,
  ...props
}: EightShapeProps) {
  const width = size
  const height = size * (211 / 299)
  return (
    <svg width={width} height={height} viewBox="0 0 299 211" fill="none" aria-hidden="true" {...props}>
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { stop-color: ${startColor}; }
            50% { stop-color: ${endColor}; }
          }
          .animate-gradient stop {
            animation: gradientShift ${animationDuration}s ease-in-out infinite;
          }
          .animate-gradient stop:nth-child(2) {
            animation-delay: ${-animationDuration / 2}s;
          }
        `}
      </style>
      <path opacity="0.530859" d="M292.838 26.3696L143.008 2.69211L134.888 207.843L3.99997 132.319L292.838 26.3696Z" stroke="url(#paint0_linear_0_53)" stroke-width="3" />
      <defs>
        <linearGradient id="paint0_linear_0_53" x1="205.054" y1="-51.2381" x2="5.95925" y2="134.42" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stop-color={startColor} />
          <stop offset="1" stop-color={endColor} />
        </linearGradient>
      </defs>
    </svg>

  )
}