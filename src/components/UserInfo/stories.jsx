import UserInfo from '.'

export default {
  title: 'User Cards',
  component: UserInfo,
}

export const Basic = args => <UserInfo {...args} />
Basic.args = {
  name: 'Luana da Silva Sauro',
  email: 'luanadasilva@gmail.com',
  cpf: '111.222.333-99',
}
