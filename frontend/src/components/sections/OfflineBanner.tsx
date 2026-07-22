import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleOnline() {
      setIsOffline(false)
      // Small delay to allow the slide-down animation
      setTimeout(() => setVisible(false), 300)
    }

    function handleOffline() {
      setIsOffline(true)
      setVisible(true)
    }

    // Initial state
    if (!navigator.onLine) {
      setVisible(true)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!visible && !isOffline) return null

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        isOffline
          ? "translate-y-0"
          : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-center gap-2 bg-amber-400 px-4 py-3 text-sm font-medium text-amber-900 shadow-lg">
        <svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636a9 9 0 010 12.728m-2.829-2.829a5 5 0 000-7.07m-4.243 4.243a1 1 0 010-1.414M12 17h.01"
          />
        </svg>
        <span>Sin conexión. Algunos datos pueden no estar disponibles.</span>
      </div>
    </div>
  )
}

export { OfflineBanner }
