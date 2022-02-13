import { cloneElement, forwardRef } from 'react'

import Tooltip, { Props } from '@/components/common/Tooltip'

const PassHrefToolTip = forwardRef<unknown, Props>(function passHrefToolTip (props, ref): JSX.Element {
  if (props.children === undefined) {
    return <></>
  }

  const newProps = { ...props, ref }
  newProps.ref = ref
  delete newProps.children
  delete newProps.title

  return (
    <Tooltip title={props.title}>
      {cloneElement(props.children, newProps)}
    </Tooltip>
  )
})

export default PassHrefToolTip
