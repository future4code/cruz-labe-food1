import UserAdress from '.'

export default {
  title: 'User Cards',
  component: UserAdress,
}

export const Address = args => <UserAdress {...args} />
Address.args = {
  title: 'Titulo do card',
  address: 'Endereco da pessoinha / SP',
}
