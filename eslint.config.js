import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  typescript: true,

  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single'
  },

  rules: {
    'no-console': 'warn',
    'style/comma-dangle': ['error', 'never']
  },

  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style']
      }],
      'vue/operator-linebreak': ['error', 'before']
    }
  },

  ignores: [
    '**/dist',
    '**/build',
    '**/node_modules',
    '.vscode',
    'src/assets',
    'public',
    'pnpm-lock.yaml',
    '*.d.ts',
    './*.md'
  ]
})
