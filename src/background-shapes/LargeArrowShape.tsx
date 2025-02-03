interface LargeArrowProps extends React.SVGProps<SVGSVGElement> {
  startColor?: string
  endColor?: string
  animationDuration?: number
  size?: number
}

export default function LargeArrowShape({
  startColor = "#97E45D",
  endColor = "#6297F5",
  animationDuration = 3,
  size = 291,
  ...props
}: LargeArrowProps) {
  const width = size
  const height = size * (154 / 291)
  return (
    <svg width={width} height={height} viewBox="0 0 291 154" fill="none" aria-hidden="true" {...props}>
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
      <path opacity="0.323326" d="M290.024 106.127L2.25312 -25.5224L18.5223 151.237L119.272 88.4183L290.024 106.127Z" stroke="url(#paint0_linear_0_25)" strokeWidth="3" />
      <defs>
        <linearGradient id="paint0_linear_0_25" x1="290.024" y1="106.127" x2="100.979" y2="-111.344" gradientUnits="userSpaceOnUse" className="animate-gradient">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>

  )
}