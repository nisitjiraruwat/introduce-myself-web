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
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  if (children === undefined) {
    return <></>
  }

  const newProps = { ...children.props }

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setLeft(rect.left + rect.width / 2)
    setTop(rect.top + rect.height)
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
            top: `${top}px`,
            left: `${left}px`
          }}
        >
          <h3 className='flex px-2 pb-0.5 text-sm text-white bg-zinc-900 rounded'>{ title }</h3>
        </div>}
    </>
  )
}

export default Tooltip
