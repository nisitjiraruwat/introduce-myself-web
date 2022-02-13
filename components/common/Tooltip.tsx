import { cloneElement, FC, ReactElement, MouseEventHandler, MouseEvent, useState } from 'react'

export interface Props {
  children?: ReactElement,
  title?: string
}

const composeEventHandler = (handler: MouseEventHandler, eventHandler: MouseEventHandler | undefined) => {
  return (event: MouseEvent) => {
    if (eventHandler !== undefined) {
      eventHandler(event)
    }

    handler(event)
  }
}

const Tooltip: FC<Props> = ({ children, title }) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const [position, setPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 })

  if (children === undefined) {
    return <></>
  }

  const newProps = { ...children.props }

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({
      top: rect.top + rect.height,
      left: rect.left + rect.width / 2
    })
    setIsMouseHover(true)
  }

  const handleMouseLeave = () => {
    setIsMouseHover(false)
  }

  newProps.onMouseOver = composeEventHandler(handleMouseOver, newProps.onMouseOver)
  newProps.onMouseLeave = composeEventHandler(handleMouseLeave, newProps.onMouseLeave)

  return (
    <>
      {cloneElement(children, newProps)}
      {isMouseHover &&
        <div
          className='fixed z-50 -translate-x-1/2 translate-y-0.5'
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`
          }}
        >
          <h3 className='flex px-2 pb-0.5 text-sm text-white bg-zinc-900 rounded'>{ title }</h3>
        </div>}
    </>
  )
}

export default Tooltip
