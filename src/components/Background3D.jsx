import React, { useEffect, useRef } from 'react'
import '../styles/Background3D.css'

const Background3D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Geometric shapes
    const shapes = []
    const shapeCount = 15

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 100 + 50
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.type = Math.floor(Math.random() * 4)
        this.colors = ['#10b981', '#3b82f6', '#a855f7', '#f43f5e']
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.strokeStyle = this.color
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.3

        switch (this.type) {
          case 0: // Triangle
            ctx.beginPath()
            ctx.moveTo(0, -this.size / 2)
            ctx.lineTo(this.size / 2, this.size / 2)
            ctx.lineTo(-this.size / 2, this.size / 2)
            ctx.closePath()
            ctx.stroke()
            break
          case 1: // Square
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break
          case 2: // Circle
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.stroke()
            break
          case 3: // Hexagon
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i
              const x = (this.size / 2) * Math.cos(angle)
              const y = (this.size / 2) * Math.sin(angle)
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.stroke()
            break
        }
        ctx.restore()
      }
    }

    // Initialize shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape())
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        shape.update()
        shape.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="background-3d-canvas" />
}

export default Background3D
