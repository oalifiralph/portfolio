"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create gradient points
    const points = [
      { x: width * 0.1, y: height * 0.1, vx: 0.3, vy: 0.2 },
      { x: width * 0.8, y: height * 0.3, vx: -0.2, vy: 0.3 },
      { x: width * 0.5, y: height * 0.8, vx: 0.2, vy: -0.4 },
      { x: width * 0.2, y: height * 0.6, vx: -0.3, vy: -0.2 },
    ]

    const colors = [
      "rgba(59, 130, 246, 0.5)", // blue-500
      "rgba(79, 70, 229, 0.5)", // indigo-600
      "rgba(16, 185, 129, 0.5)", // emerald-500
      "rgba(99, 102, 241, 0.5)", // indigo-500
    ]

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Move points
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1
      })

      // Draw gradients
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8,
      )

      points.forEach((point, i) => {
        const grd = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, Math.min(width, height) * 0.4)
        grd.addColorStop(0, colors[i])
        grd.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = grd
        ctx.fillRect(0, 0, width, height)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 opacity-30 dark:opacity-20" />
}
