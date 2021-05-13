import RadioGroup from '.'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  args: {
    options: [
      {
        label: 'Dinheiro',
        value: 'money',
      },
      {
        label: 'Cartão de cŕedito',
        value: 'creditcard',
      },
    ],
  },
}

export const Default = args => <RadioGroup {...args} />
