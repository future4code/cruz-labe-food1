import Button from '.'

export default {
  title: 'Button Padrao',
  component: Button
}



export const Padrao = args => <Button {...args} />
  Padrao.args = {
    label: 'text',
  }