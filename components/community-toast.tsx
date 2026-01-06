"use client"

import { useState, useEffect } from "react"
import { X, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const communityMessages = [
  {
    title: "Spread the Love",
    message: "Share your prompts and help others build amazing things.",
  },
  {
    title: "Community First",
    message: "Together we create, learn, and grow. Your contribution matters.",
  },
  {
    title: "Build Together",
    message: "Every prompt shared is a stepping stone for someone else.",
  },
  {
    title: "Pay It Forward",
    message: "The best ideas come from collaboration. Share yours today.",
  },
  {
    title: "You're Awesome",
    message: "Thanks for being part of this community. Keep creating!",
  },
  {
    title: "Open Source Love",
    message: "Knowledge grows when shared. Let's build the future together.",
  },
]

export function CommunityToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(communityMessages[0])

  useEffect(() => {
    const showToast = () => {
      const randomMessage = communityMessages[Math.floor(Math.random() * communityMessages.length)]
      setCurrentMessage(randomMessage)
      setIsVisible(true)
    }

    // Initial delay of 5-10 seconds
    const initialDelay = Math.random() * 5000 + 5000
    const initialTimer = setTimeout(showToast, initialDelay)

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    if (!isVisible) {
      // After closing, schedule next appearance in 5-10 seconds
      const nextDelay = Math.random() * 5000 + 5000
      const timer = setTimeout(() => {
        const randomMessage = communityMessages[Math.floor(Math.random() * communityMessages.length)]
        setCurrentMessage(randomMessage)
        setIsVisible(true)
      }, nextDelay)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 shadow-lg">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-rose-500/20">
              <Heart className="h-5 w-5 text-rose-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground">{currentMessage.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{currentMessage.message}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="shrink-0 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
