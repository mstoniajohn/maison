import React, { useRef, useEffect, useState } from 'react'
import { Button } from '../ui/button'

interface SignatureProps {
  onSubmit: (dataURL: string) => void
}

const Signature: React.FC<SignatureProps> = ({ onSubmit }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [dataURL, setDataURL] = useState<string>('')
  const [isSaved, setIsSaved] = useState(false)

  const getCanvasContext = () => {
    const canvas = canvasRef.current
    return canvas ? canvas.getContext('2d') : null
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = getCanvasContext()

    if (!canvas || !context) return

    // Set canvas dimensions to avoid scaling issues
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    context.lineWidth = 2
    context.lineCap = 'round'
    context.strokeStyle = 'black'

    const getPosition = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      if ('touches' in e) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
      return {
        x: (e as MouseEvent).clientX - rect.left,
        y: (e as MouseEvent).clientY - rect.top,
      }
    }

    const startDrawing = (e: MouseEvent | TouchEvent) => {
      setIsDrawing(true)
      const { x, y } = getPosition(e)
      context.beginPath()
      context.moveTo(x, y)
    }

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return
      const { x, y } = getPosition(e)
      context.lineTo(x, y)
      context.stroke()
    }

    const stopDrawing = () => {
      if (!isDrawing) return
      setIsDrawing(false)
      context.closePath()
      const savedDataURL = canvas.toDataURL('image/png')
      setDataURL(savedDataURL)
    }

    // Attach Mouse Events
    canvas.addEventListener('mousedown', startDrawing)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDrawing)
    canvas.addEventListener('mouseleave', stopDrawing)

    // Attach Touch Events
    canvas.addEventListener('touchstart', startDrawing)
    canvas.addEventListener('touchmove', draw)
    canvas.addEventListener('touchend', stopDrawing)

    return () => {
      // Cleanup events on unmount
      canvas.removeEventListener('mousedown', startDrawing)
      canvas.removeEventListener('mousemove', draw)
      canvas.removeEventListener('mouseup', stopDrawing)
      canvas.removeEventListener('mouseleave', stopDrawing)

      canvas.removeEventListener('touchstart', startDrawing)
      canvas.removeEventListener('touchmove', draw)
      canvas.removeEventListener('touchend', stopDrawing)
    }
  }, [isDrawing])

  const handleClear = () => {
    const canvas = canvasRef.current
    const context = getCanvasContext()
    if (!canvas || !context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
    setDataURL('') // Clear the saved signature
    setIsSaved(false) // Hide success message
  }

  const handleSave = () => {
    if (!dataURL) {
      const canvas = canvasRef.current
      if (!canvas) return

      const savedDataURL = canvas.toDataURL('image/png')
      setDataURL(savedDataURL)
    }
    onSubmit(dataURL) // Send signature data to the parent component
    setIsSaved(true) // Show success message
  }

  return (
    <div>
      <h6 className="text-md mb-2 font-semibold">Draw Your Signature Below:</h6>
      <canvas
        ref={canvasRef}
        className="h-48 w-full rounded-md border border-gray-400"
      />
      {dataURL && (
        <div className="mt-4">
          <h6 className="text-sm font-semibold">Saved Signature Preview</h6>
          <img src={dataURL} alt="Saved Signature" className="rounded-md" />
        </div>
      )}
      <div className="mt-4 flex space-x-2">
        <Button
          onClick={handleSave}
          disabled={isDrawing || isSaved} // Disable save button if no signature has been drawn yet
          className="bg-blue font-bold uppercase hover:text-blue"
        >
          Save Signature
        </Button>
        <Button
          onClick={handleClear}
          className="text-white bg-gray-500 font-bold uppercase"
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export default Signature
