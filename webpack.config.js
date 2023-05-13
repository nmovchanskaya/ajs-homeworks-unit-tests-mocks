const path = require('path'); // Node.js модуль для разрешения путей файлов

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
};
