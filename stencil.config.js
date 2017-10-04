exports.config = {
  namespace: 'lazyiframe',
  generateDistribution: true,
  bundles: [
    { components: ['lazy-iframe'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
