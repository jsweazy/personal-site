interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  startColor?: string
  endColor?: string
  animationDuration?: number
  size?: number
}

export default function ArrowShape({
  startColor = "#00437B",
  endColor = "#6297F5",
  animationDuration = 3,
  size = 214,
  ...props
}: ArrowProps) {
  const width = size
  const height = size * (182 / 214)
  return (
    <svg width={width} height={height} viewBox="0 0 214 182" fill="none" aria-hidden="true" {...props}>
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
      <path opacity="0.396875" d="M1 169.503L185.09 117.847L212.5 1L89.3224 180L1 169.503Z" stroke="url(#paint0_linear_0_51)" stroke-width="3" />
      <defs>
        <linearGradient id="paint0_linear_0_51" x1="5.20488" y1="8.11748" x2="5.20488" y2="180" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stop-color={startColor} />
          <stop offset="1" stop-color={endColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}