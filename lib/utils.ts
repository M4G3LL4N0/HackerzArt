import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Premium fade-in animation utility
export function fadeIn(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay = 0
) {
  const translate = {
    up: 'translateY(20px)',
    down: 'translateY(-20px)',
    left: 'translateX(20px)',
    right: 'translateX(-20px)',
  }[direction]

  return {
    initial: {
      opacity: 0,
      transform: translate,
    },
    animate: {
      opacity: 1,
      transform: 'translate(0)',
      transition: {
        delay,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }
}
