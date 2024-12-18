import { DefineLocaleMessage } from 'vue-i18n'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    message: {
      hello: string
      goodbye: string 
      welcome: string
    },
    description: string
  }
}
