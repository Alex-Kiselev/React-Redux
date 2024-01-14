module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}], //Автоматическое добавление точки с запятой ; при ctr + s
    'comma-dangle': ['error', 'never'], //ругается на весящую запятую в конце ,
    quotes: ['error', 'single'], //Ругается на 2ые кавычки при сохранение ставит 1 
    'react/prop-types': [0], //Выключение ПРОВЕРКИ ТИПО тк СЕЙЧАС ЧИСТЫЙ JS
		'indent': ['error', 'tab'] // по умолчанию добавил Табы Нужно для отступов слева
  },
}
