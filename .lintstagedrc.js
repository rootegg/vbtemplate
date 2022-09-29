module.exports = {
  '**/*.{vue,js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{css,less,scss}': ['stylelint', 'prettier --write'],
  '**/*.{json,html}': ['prettier --write']
}
