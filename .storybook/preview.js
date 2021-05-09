import 'styles/global.scss'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'centered',
  backgrounds: 'red',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
