import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface EditDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  title: string
  children: ReactNode
  isUpdating: boolean
}

// Move EditDialog component outside of TestGuide
const EditDialog = ({
  isOpen,
  onClose,
  onSave,
  title,
  children,
  isUpdating,
}: EditDialogProps) => {
  if (!isOpen) return null

  return (
    <div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-white w-full max-w-4xl rounded-lg p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4">{children}</div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose} disabled={isUpdating}>
            Cancel
          </Button>
          <Button onClick={onSave} disabled={isUpdating}>
            {isUpdating ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditDialog
