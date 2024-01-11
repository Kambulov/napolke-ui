import React, { useMemo } from 'react'
import { useSelectContext } from './select-context'
import useWarning from '../utils/use-warning'
import Ellipsis from '../shared/ellipsis'
import useScale, { withScale } from '../use-scale'
import useClasses from '../use-classes'
import {Theme} from "../themes/presets";

interface Props {
  value?: string
  disabled?: boolean
  className?: string
  divider?: boolean
  label?: boolean
  preventAllEvents?: boolean
}

const defaultProps = {
  disabled: false,
  divider: false,
  label: false,
  className: '',
  preventAllEvents: false,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type SelectOptionProps = Props & NativeAttrs

const SelectOptionComponent: React.FC<React.PropsWithChildren<SelectOptionProps>> = ({
  value: identValue,
  className,
  children,
  disabled,
  divider,
  label,
  preventAllEvents,
  ...props
}: React.PropsWithChildren<SelectOptionProps> & typeof defaultProps) => {
  const { SCALES } = useScale()
  const { updateValue, value, disableAll } = useSelectContext()
  const isDisabled = useMemo(() => disabled || disableAll, [disabled, disableAll])
  const isLabel = useMemo(() => label || divider, [label, divider])
  const classes = useClasses('option', { divider, label }, className)
  if (!isLabel && identValue === undefined) {
    useWarning('The props "value" is required.', 'Select Option')
  }

  const selected = useMemo(() => {
    if (!value) return false
    if (typeof value === 'string') {
      return identValue === value
    }
    return value.includes(`${identValue}`)
  }, [identValue, value])

  const bgColor = useMemo(() => {
    if (isDisabled) return Theme.palette.gray50.name
    return selected ? Theme.palette.gray200.name : Theme.palette.background.name
  }, [selected, isDisabled, Theme.palette])

  const hoverBgColor = useMemo(() => {
    if (isDisabled || isLabel || selected) return bgColor
    return Theme.palette.gray50.name
  }, [selected, isDisabled, Theme.palette, isLabel, bgColor])

  const color = useMemo(() => {
    if (isDisabled) return Theme.palette.gray400.name
    return selected ? Theme.palette.black.name : Theme.palette.gray500.name
  }, [selected, isDisabled, Theme.palette])

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (preventAllEvents) return
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
    event.preventDefault()
    if (isDisabled || isLabel) return
    updateValue && updateValue(identValue)
  }

  return (
    <div className={classes} onClick={clickHandler} {...props}>
      <Ellipsis height={SCALES.height(2.25)}>{children}</Ellipsis>
      <style jsx>{`
        .option {
          display: flex;
          max-width: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          align-items: center;
          font-weight: normal;
          background-color: ${bgColor};
          color: ${color};
          user-select: none;
          border: 0;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
          transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
          --select-font-size: ${SCALES.fs(0.75)};
          font-size: var(--select-font-size);
          width: ${SCALES.width(1, '100%')};
          height: ${SCALES.height(2.25)};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0.667)} ${SCALES.pb(0)} ${SCALES.pl(0.667)};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        .option:hover {
          background-color: ${hoverBgColor};
          color: ${Theme.palette.gray700.name};
        }

        .divider {
          line-height: 0;
          overflow: hidden;
          border-top: 1px solid ${Theme.palette.border.name};
          width: ${SCALES.width(1, '100%')};
          height: ${SCALES.height(1, 0)};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
          margin: ${SCALES.mt(0.5)} ${SCALES.mr(0)} ${SCALES.mb(0.5)} ${SCALES.ml(0)};
        }

        .label {
          color: ${Theme.palette.gray700.name};
          border-bottom: 1px solid ${Theme.palette.border.name};
          text-transform: capitalize;
          cursor: default;
          font-size: ${SCALES.fs(0.875)};
          width: ${SCALES.width(1, '100%')};
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

SelectOptionComponent.defaultProps = defaultProps
SelectOptionComponent.displayName = 'NuiSelectOption'
const SelectOption = withScale(SelectOptionComponent)
export default SelectOption
