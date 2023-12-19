import React from 'react'
import Grid from '../grid'
import SelectClearIcon from './select-icon-clear'
import {Theme} from "../themes/presets";

interface Props {
  disabled: boolean
  onClear: (() => void) | null
}

const SelectMultipleValue: React.FC<React.PropsWithChildren<Props>> = ({
  disabled,
  onClear,
  children,
}) => {

  return (
    <Grid>
      <div className="item">
        {children}
        {!!onClear && <SelectClearIcon onClick={onClear} />}
      </div>
      <style jsx>{`
        .item {
          display: inline-flex;
          justify-items: center;
          align-items: center;
          line-height: 1;
          padding: 0 0.5em;
          font-size: var(--select-font-size);
          height: calc(var(--select-font-size) * 2);
          border-radius: ${Theme.layout.radius.name};
          background-color: ${Theme.palette.gray200.name};
          color: ${disabled ? Theme.palette.gray400.name : Theme.palette.gray700.name};
        }

        .item > :global(div:not(.clear-icon)),
        .item > :global(div:not(.clear-icon):hover) {
          border-radius: 0;
          background-color: transparent;
          padding: 0;
          margin: 0;
          color: inherit;
        }
      `}</style>
    </Grid>
  )
}

SelectMultipleValue.displayName = 'GeistSelectMultipleValue'
export default SelectMultipleValue
