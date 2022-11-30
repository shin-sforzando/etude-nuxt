module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: [],
  rules: {
    'at-rule-no-unknown': false,
    'block-no-empty': null,
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    // prettierのインラインスタイルの末尾のコロンを削除するとコンフリクトするため、回避設定
    'declaration-block-trailing-semicolon': null,
    indentation: 2,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    'number-leading-zero': null,
    'property-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': null,
    'selector-class-pattern': null,
    // ::v-deepエラー回避
    'selector-pseudo-class-no-unknown': null,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
  },
}
