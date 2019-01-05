// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }
//

module.exports = {
  'presets': [['@vue/app', { 'modules': false }]],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk',
      },
    ],
  ],
};
