import enUS from './seeds-en-us.json'
import ruRu from './seeds-ru-ru.json'

export type Seed = {
  name: string
  url: string
  group?: string
}

export type Seeds = Array<Seed>

const SEEDS = {
  'en-us': enUS as Seeds,
  'ru-ru': ruRu as Seeds,
}

export default SEEDS
