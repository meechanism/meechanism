import { useLayoutEffect, useEffect } from "react"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect
const isBrowser = typeof window !== `undefined`

function getPosition(e) {
  let mouseX = e.pageX
  let mouseY = e.pageY
  let x = (4 * mouseX) / 150 + 40
  let y = (4 * mouseY) / 150 + 60
  return { x, y }
}

export function useMousePosition(effect, deps, wait) {
  let throttleTimeout = null
  const callBack = e => () => {
    const currPos = getPosition(e)
    effect && effect(currPos)
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handle = e => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack(e), wait)
        }
      } else {
        callBack(e)()
      }
    }

    window.addEventListener("mousemove", handle)

    return () => window.removeEventListener("mousemove", handle)
  }, deps)
}
