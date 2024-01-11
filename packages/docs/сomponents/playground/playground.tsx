import React from 'react'
import dynamic from 'next/dynamic'
import { Loading } from '@napolke-ui'
import { useConfigs } from 'lib/config-context'
import Title from './title'
import {Theme} from '../../../core/components/themes/presets'
const DynamicLive = dynamic(() => import('./dynamic-live'), {
  ssr: false,
  loading: () => (
    <div style={{ padding: '20pt 0' }}>
      <Loading />
    </div>
  ),
})

export type PlaygroundProps = {
  title?: React.ReactNode | string
  desc?: React.ReactNode | string
  code: string
  scope: {
    [key: string]: any
  }
}

const defaultProps = {
  desc: '',
  code: '',
  bindings: {},
}

const Playground: React.FC<PlaygroundProps> = React.memo(
  ({
    title: inputTitle,
    code: inputCode,
    desc,
    scope,
  }: PlaygroundProps & typeof defaultProps) => {
    const { isRussian } = useConfigs()
    const code = inputCode.trim()
    const title = inputTitle || (isRussian ? 'Главные' : 'General')

    return (
      <>
        <Title title={title} desc={desc} />
        <div className="playground">
          <DynamicLive code={code} scope={scope} />
          <style jsx>{`
            .playground {
              width: 100%;
              border-radius: ${Theme.layout.radius.name};
              border: 1px solid ${Theme.palette.gray200.name};
            }
          `}</style>
        </div>
      </>
    )
  },
)

Playground.defaultProps = defaultProps
Playground.displayName = 'NuiPlayground'
export default Playground
