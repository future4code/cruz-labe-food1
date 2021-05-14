import Button from '.'

export default {
  title: 'Button Padrao',
  component: Button,
  args: {
    label: 'testando',
    props: {label: 'teste'},
  },
}

export const Padrao = (...args) => <Button {...args}>{args.children}</Button>
