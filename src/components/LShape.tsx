interface LShapeProps {
  size?: number
  thickness?: number
  color?: string
  className?: string
}

export default function LShape({ size = 200, thickness, color = "#4338CA", className = "" }: LShapeProps) {
  const actualThickness = thickness || size / 3
  const safeThickness = Math.min(actualThickness, size)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <rect x={0} y={size - safeThickness} width={size} height={safeThickness} fill={color} />
      <rect x={size - safeThickness} y={0} width={safeThickness} height={size} fill={color} />
    </svg>
  )
}

