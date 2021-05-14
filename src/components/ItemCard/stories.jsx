import ItemCard from '.'

export default {
  title: 'Cardapio de hoje',
  component: ItemCard,
  args: {
    name: 'teste',
    id: '239482394327',
    description: 'Description of the product',
    price: 10,
    photoUrl:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201802031948_20717381.jpg',
  },
}

export const Normal = args => <ItemCard {...args} />

export const Item1 = args => <ItemCard {...args} />
Item1.args = {
  name: 'Prato do dia',
}

export const Item2 = args => <ItemCard {...args} />
Item2.args = {
  name: 'Jantinha',
}
