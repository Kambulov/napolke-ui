import enUS from './metadata-en-us.json'
import ruRu from './metadata-ru-ru.json'
import type { Sides } from '../../сomponents/layout/sidebar/side-item'

export interface MultipleLocaleMetaInformation {
  [key: string]: Sides[]
}

const Metadata: MultipleLocaleMetaInformation = {
  'en-us': enUS,
  'ru-ru': ruRu,
}

export default Metadata
