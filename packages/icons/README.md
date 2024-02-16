# React Icons

Компонент иконок для Napolke UI.

[![npm Version](https://img.shields.io/npm/v/@napolke-ui/icons)](https://www.npmjs.com/package/@napolke-ui/icons)

## Установка

```
$ yarn add @napolke-ui/icons
OR
$ npm install @napolke-ui/icons
```

## Использование

```tsx
import React from 'react'
import { Code } from '@napolke-ui/icons'

const App = () => {
  return <Code />
}

export default App
```

Иконки принимают параметры `color` и `size`:

```ts
<Code color="red" size={36} />
<Code color="blue" strokeWidth={2} />
```

## Other ways

1. Имортировать сразу все иконки

```tsx
import * as Icons from '@napolke-ui/icons'

const App = () => {
  return <Icons.Code />
}
```

2. Импортировать только одну иконку

```tsx
import Code from '@napolke-ui/icons/code'

const App = () => {
  return <Code />
}
```

