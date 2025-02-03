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
  size = 131,
  ...props
}: ArrowProps) {
  const width = size
  const height = size * (127 / 131)
  return (
    <svg width={width} height={height} viewBox="0 0 131 127" fill="none" aria-hidden="true" {...props}>
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
      <path opacity="0.372321" d="M1.74552 72.0398L110.263 3.3314L129.049 126.148L85.9918 61.5151L1.74552 72.0398Z" stroke="url(#paint0_linear_0_34)" strokeWidth="3" />
      <defs>
        <linearGradient id="paint0_linear_0_34" x1="33.5424" y1="-16.9558" x2="0.605435" y2="84.4138" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}