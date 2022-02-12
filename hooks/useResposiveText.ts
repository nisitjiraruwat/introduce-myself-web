import { useEffect, useState } from 'react'

interface ResposiveValueProps<T> {
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}

const useResposiveValue = <T>(defaultValue: T, resposiveValues?: ResposiveValueProps<T>): T => {
  const [value, setValue] = useState<T>(defaultValue)
  useEffect(() => {
    const onResize = (): void => {
      if (resposiveValues === undefined) {
        return
      }

      if (window.innerWidth >= 1536 && resposiveValues['2xl'] !== undefined) {
        setValue(resposiveValues['2xl'])
      } else if (window.innerWidth >= 1280 && resposiveValues.xl !== undefined) {
        setValue(resposiveValues.xl)
      } else if (window.innerWidth >= 1024 && resposiveValues.lg !== undefined) {
        setValue(resposiveValues.lg)
      } else if (window.innerWidth >= 768 && resposiveValues.md !== undefined) {
        setValue(resposiveValues.md)
      } else if (window.innerWidth >= 640 && resposiveValues.sm !== undefined) {
        setValue(resposiveValues.sm)
      } else {
        setValue(defaultValue)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [defaultValue, resposiveValues])

  return value
}

export default useResposiveValue
