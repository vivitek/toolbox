import React from "react"
import { Close } from "./Icons/Icon"

const Modal = ({
  children,
  open = false,
  onBackdropClick = () => {},
  onClose = () => {}
}) => {
  if (!open) return null
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0" onClick={onBackdropClick}>
        <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full relative p-8 pt-4">
          {children}
          <button className="absolute top-2 right-2" onClick={onClose}>
            <Close />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal