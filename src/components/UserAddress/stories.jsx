import Useraddress from '.'

export default {
  title: 'User Cards',
  component: Useraddress,
}

export const Address = args => <Useraddress {...args} />
Address.args = {
  title: 'Titulo do card',
  address: 'Endereco da pessoinha / SP',
}
