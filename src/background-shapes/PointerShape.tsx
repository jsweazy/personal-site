interface PointerShapeProps extends React.SVGProps<SVGSVGElement> {
  startColor?: string
  endColor?: string
  animationDuration?: number
  size?: number
}

export default function PointerShape({
  startColor = "#511370",
  endColor = "#6297F5",
  animationDuration = 3,
  size = 89,
  ...props
}: PointerShapeProps) {
  const width = size
  const height = size * (81 / 89)
  return (
    <svg width={width} height={height} viewBox="0 0 89 81" fill="none" aria-hidden="true" {...props}>
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
      <path opacity="0.323326" d="M71.8892 77.4721L86.5202 26.4478L5.00004 3.07233L71.8892 77.4721Z" stroke="url(#paint0_linear_0_22)" stroke-width="3" />
      <defs>
        <linearGradient id="paint0_linear_0_22" x1="104.717" y1="59.2755" x2="57.4479" y2="-26" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stop-color="#511370" />
          <stop offset="1" stop-color="#6297F5" />
        </linearGradient>
      </defs>
    </svg>
  )
}