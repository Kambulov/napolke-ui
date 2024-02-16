import React, { useEffect, useMemo, useRef } from 'react'
import { TabsInternalCellProps, useTabsContext } from './tabs-context'
import useScale, { withScale } from '../use-scale'
import useClasses from '../use-classes'
import {Theme} from "../themes/presets";

interface Props {
  label: string | React.ReactNode
  value: string
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TabsItemProps = Props & NativeAttrs

const TabsItemComponent: React.FC<React.PropsWithChildren<TabsItemProps>> = ({
  children,
  value,
  label,
  disabled,
}: React.PropsWithChildren<TabsItemProps> & typeof defaultProps) => {
  const { SCALES } = useScale()
  const { register, currentValue } = useTabsContext()
  const isActive = useMemo(() => currentValue === value, [currentValue, value])

  const TabsInternalCell: React.FC<TabsInternalCellProps> = ({
    onClick,
    onMouseOver,
    activeClassName,
    activeStyle,
    hideBorder,
  }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { currentValue } = useTabsContext()
    const active = currentValue === value
    const classes = useClasses('tab', {
      active,
      disabled,
      [activeClassName!]: active,
      'hide-border': hideBorder,
    })
    const clickHandler = () => {
      if (disabled) return
      onClick && onClick(value)
    }

    return (
      <div
        ref={ref}
        className={classes}
        role="button"
        key={value}
        onMouseOver={onMouseOver}
        onClick={clickHandler}
        style={active ? activeStyle : {}}
        data-napolke="tab-item">
        {label}
        <style jsx>{`
          .tab {
            position: relative;
            box-sizing: border-box;
            cursor: pointer;
            outline: 0;
            text-transform: capitalize;
            white-space: nowrap;
            background-color: transparent;
            color: ${Theme.palette.gray500.name};
            user-select: none;
            display: flex;
            align-items: center;
            font-size: ${SCALES.fs(0.875)};
            line-height: normal;
            width: ${SCALES.width(1, 'auto')};
            height: ${SCALES.height(1, 'auto')};
            padding: ${SCALES.pt(0.875)} ${SCALES.pr(0.55)} ${SCALES.pb(0.875)}
              ${SCALES.pl(0.55)};
            margin: ${SCALES.mt(0)} ${SCALES.mr(0.2)} ${SCALES.mb(0)} ${SCALES.ml(0.2)};
            z-index: 1;
            --tabs-item-hover-left: calc(-1 * ${SCALES.pl(0.28)});
            --tabs-item-hover-right: calc(-1 * ${SCALES.pr(0.28)});
          }
          .tab:hover {
            color: ${Theme.palette.black.name};
          }
          .tab:after {
            position: absolute;
            content: '';
            bottom: -1px;
            left: 0;
            right: 0;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            transform: scaleX(0.75);
            background-color: ${Theme.palette.black.name};
            transition: opacity, transform 200ms ease-in;
            opacity: 0;
          }
          .active:after {
            opacity: 1;
            transform: scaleX(1);
          }
          .tab :global(svg) {
            max-height: 1em;
            margin-right: 5px;
          }
          .tab:first-of-type {
            margin-left: 0;
          }
          .active {
            color: ${Theme.palette.black.name};
          }
          .disabled {
            color: ${Theme.palette.gray500.name};
            cursor: not-allowed;
          }
          .hide-border:before {
            display: block;
            content: ${label};
            font-weight: 500;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
          .hide-border:after {
            display: none;
          }
          .hide-border.active {
            font-weight: 500;
          }
        `}</style>
      </div>
    )
  }
  TabsInternalCell.displayName = 'NuiTabsInternalCell'

  useEffect(() => {
    register && register({ value, cell: TabsInternalCell })
  }, [value, label, disabled])

  /* eslint-disable react/jsx-no-useless-fragment */
  return isActive ? <>{children}</> : null
}

TabsItemComponent.defaultProps = defaultProps
TabsItemComponent.displayName = 'NuiTabsItem'
const TabsItem = withScale(TabsItemComponent)
export default TabsItem
/* eslint-enable */
