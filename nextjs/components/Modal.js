import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsAnimating(true)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-w-lg w-full relative p-4"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >

              <button
                className="absolute top-0 right-0 p-4 focus:outline-none"
                onClick={() => {
                  setIsAnimating(true)
                  onClose()
                }}
              >
               <XMarkIcon className="w-8 h-8" />
              </button>
              <div>{children}</div>
            
          </motion.div>
          <motion.div
            className="fixed inset-0 bg-black/50"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
