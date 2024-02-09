import { PrismTheme } from 'prism-react-renderer'
import { NapolkeUIThemes } from '@core/themes/presets'

const makeCodeTheme = (theme: NapolkeUIThemes): PrismTheme => ({
  plain: {
    backgroundColor: 'rgb(54, 52, 80)',
    color: '#FFF',
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: theme.font.mono,
    fontSize: '.875rem',
    textRendering: 'geometricPrecision',
    borderBottomLeftRadius: theme.layout.radius.name,
    borderBottomRightRadius: theme.layout.radius.name
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'theme.palette.accents_3',
        opacity: 0.5
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: '#fff'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 1
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: theme.palette.warning.name
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: theme.palette.primary.name
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.palette.warning.name
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable'
      ],
      style: {
        color: theme.palette.secondary.name
      }
    },
    {
      types: ['attr-value', 'number'],
      style: {
        color: '#f8371c'
      }
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(251, 219, 168)'
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['language-javascript', 'script'],
      style: {
        color: theme.palette.primary.name
      }
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: '#c4b9fe'
      }
    }
  ]
})
export default makeCodeTheme
