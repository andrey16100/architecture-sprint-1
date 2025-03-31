const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // другие настройки webpack
  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        card: 'card@http://localhost:3002/remoteEntry.js', // Указываем URL для загрузки Card
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
};
