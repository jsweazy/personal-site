import type React from "react"
import { useState, useEffect } from "react"

interface SVGItemProps {
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  size: number
}

interface PlacedSVGItem extends SVGItemProps {
  id: string
  position: { x: number; y: number }
  rotation: number
  animationDuration: number
  animationDelay: number
}

interface RandomSVGPlacerProps {
  svgItems: SVGItemProps[]
  width?: number
  height?: number
}

const RandomSVGPlacer: React.FC<RandomSVGPlacerProps> = ({ svgItems, width = 1440, height = 980 }) => {
  const [placedSVGs, setPlacedSVGs] = useState<PlacedSVGItem[]>([])

  useEffect(() => {
    const checkCollision = (item: PlacedSVGItem, others: PlacedSVGItem[]): boolean => {
      return others.some((other) => {
        const dx = item.position.x - other.position.x
        const dy = item.position.y - other.position.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance < (item.size + other.size) / 2
      })
    }

    const findPosition = (size: number, placed: PlacedSVGItem[]): { x: number; y: number } | null => {
      const padding = 5
      const maxAttempts = 100

      for (let i = 0; i < maxAttempts; i++) {
        const position = {
          x: Math.random() * (width - size),
          y: Math.random() * (height - size),
        }

        const item: PlacedSVGItem = {
          component: () => null,
          id: "",
          position,
          rotation: 0,
          size: size + padding,
          animationDuration: 0,
          animationDelay: 0,
        }

        if (!checkCollision(item, placed)) {
          return position
        }
      }

      return null
    }

    const placeItems = () => {
      const placed: PlacedSVGItem[] = []
      const shuffledItems = [...svgItems].sort(() => Math.random() - 0.5)

      shuffledItems.forEach((item, index) => {
        const position = findPosition(item.size, placed)
        if (position) {
          placed.push({
            ...item,
            id: `svg-${index}`,
            position,
            rotation: Math.random() * 360,
            animationDuration: Math.random() * 10 + 20,
            animationDelay: Math.random() * -30,
          })
        }
      })

      return placed
    }

    setPlacedSVGs(placeItems())
  }, [svgItems, width, height])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <style>
          {placedSVGs
            .map(
              (svg) => `
          @keyframes float-${svg.id} {
            0%, 100% {
              transform: translate(0, 0) rotate(${svg.rotation}deg);
            }
            25% {
              transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${svg.rotation + Math.random() * 20 - 10}deg);
            }
            50% {
              transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${svg.rotation + Math.random() * 20 - 10}deg);
            }
            75% {
              transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${svg.rotation + Math.random() * 20 - 10}deg);
            }
          }
        `,
            )
            .join("\n")}
        </style>
        {placedSVGs.map(({ component: SVGComponent, id, position, size, animationDuration, animationDelay }) => (
          <div
            key={id}
            style={{
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `float-${id} ${animationDuration}s infinite ease-in-out`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            <SVGComponent width="100%" height="100%" />
          </div>
        ))}
      </div>
    </div>

  )
}

export default RandomSVGPlacer
