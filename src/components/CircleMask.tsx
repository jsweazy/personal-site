interface CircleMaskProps {
  size: number
  borderWidth?: number
  color?: string
  gradientColors?: [string, string]
  className?: string
}

export default function CircleMask({
  size,
  borderWidth = 3,
  color = "#3B82F6",
  gradientColors,
  className = "",
}: CircleMaskProps) {
  const radius = size / 2
  const innerRadius = radius - borderWidth
  const useGradient = !!gradientColors

  const uniqueId = `circle-${size}-${borderWidth}-${gradientColors ? "gradient" : "solid"}`

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <defs>
        {useGradient && (
          <linearGradient id={`circleGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        )}
        <mask id={`circleMask-${uniqueId}`}>
          <circle cx={radius} cy={radius} r={radius} fill="white" />
          <circle cx={radius} cy={radius} r={innerRadius} fill="black" />
        </mask>
      </defs>
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        fill={useGradient ? `url(#circleGradient-${uniqueId})` : color}
        mask={`url(#circleMask-${uniqueId})`}
      />
    </svg>
  )
}



