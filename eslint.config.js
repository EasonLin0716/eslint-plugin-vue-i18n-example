import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import pluginVue from 'eslint-plugin-vue'
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended, // '@eslint/js'
  // ...vue.configs['flat/recommended'], // 'eslint-plugin-vue'
  ...pluginVue.configs['flat/recommended'],
  ...vueI18n.configs['flat/recommended'],
  {
    rules: {
      // Optional.
      '@intlify/vue-i18n/no-dynamic-keys': 'error',
      '@intlify/vue-i18n/no-unused-keys': [
        'error',
        {
          extensions: ['.js', '.vue']
        }
      ]
    },
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
        // or
        // localeDir: {
        //   pattern: './path/to/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
        //   localeKey: 'file' // or 'path' or 'key'
        // }
        // or
        // localeDir: [
        //   {
        //     // 'file' case
        //     pattern: './path/to/locales1/*.{json,json5,yaml,yml}',
        //     localeKey: 'file'
        //   },
        //   {
        //     // 'path' case
        //     pattern: './path/to/locales2/*.{json,json5,yaml,yml}',
        //     localePattern: /^.*\/(?<locale>[A-Za-z0-9-_]+)\/.*\.(json5?|ya?ml)$/,
        //     localeKey: 'path'
        //   },
        //   {
        //     // 'key' case
        //     pattern: './path/to/locales3/*.{json,json5,yaml,yml}',
        //     localeKey: 'key'
        //   },
        // ]

        // Specify the version of `vue-i18n` you are using.
        // If not specified, the message will be parsed twice.
        messageSyntaxVersion: '^9.0.0'
      }
    }
  }
]