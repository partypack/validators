module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: 17,
          firefox: 60,
          chrome: 67,
          safari: '11.1',
        },
        loose: true,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: './lib',
        alias: {
          '@lib': './lib',
        },
      },
    ],
  ],
};
