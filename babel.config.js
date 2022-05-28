module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            'benefits/constants': './constants',
            'benefits/components': './components',
            'benefits/screens': './screens',
            'benefits/data': './data',
            'benefits/hooks': './hooks',
          },
        },
      ],
    ],
  };
};
