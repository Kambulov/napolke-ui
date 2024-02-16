export default {
  plugins: [
    { name: 'removeXMLNS' },
    { name: 'removeTitle' },
    {
      name: 'cleanupAttrs',
      params: {
        camelCase: true
      }
    }
  ]
}
