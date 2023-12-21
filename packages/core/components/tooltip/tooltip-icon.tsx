import React, { useMemo } from 'react'
import { getIconPosition } from './placement'
import { Placement } from '../utils/prop-types'
import useTheme from '../use-theme'
import {Theme} from "../themes/presets";

interface Props {
  placement: Placement
  shadow: boolean
}

const TooltipIcon: React.FC<Props> = ({ placement, shadow }) => {
  const {mode} = useTheme()
  const { transform, top, left, right, bottom } = useMemo(
    () =>
      getIconPosition(
        placement,
        'var(--tooltip-icon-offset-x)',
        'var(--tooltip-icon-offset-y)',
      ),
    [placement],
  )
  const bgColorWithDark = useMemo(() => {
    if (!shadow || mode !== 'dark') return 'var(--tooltip-content-bg)'
    return Theme.palette.gray200.name
  }, [mode, shadow])

  return (
    <span>
      <style jsx>{`
        span {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 7px 6px 0;
          border-color: transparent ${bgColorWithDark} transparent transparent;
          position: absolute;
          left: ${left};
          top: ${top};
          right: ${right};
          bottom: ${bottom};
          transform: ${transform};
        }
      `}</style>
    </span>
  )
}

export default TooltipIcon
