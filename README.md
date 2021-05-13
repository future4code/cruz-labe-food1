

# Rappi4 project


<img width="315" alt="Rappi4" src="https://user-images.githubusercontent.com/7757352/118077104-dc216680-b389-11eb-8017-2991f90bf9d5.png">


Aplicativo de delivery de comida Rappi4, projeto final Front End :)

### Integrantes do grupo de desenvolvimento
<table>
  <tr>
    <th>Marcelino Sandroni</th>
        <th>Luana Farias da Silva</th>
        <th>Marcos Maia</th>
  </tr>
  <tr>
    <td>
  <img width='150px' height='150px' src='https://avatars.githubusercontent.com/u/7757352?v=4' >
    </td>
        <td>
  <img width='150px' height='150px' src='https://avatars.githubusercontent.com/u/75901276?v=4' >
    </td>
        <td>
  <img width='150px' height='150px' src='https://avatars.githubusercontent.com/u/30267119?v=4' >
    </td>
  </tr>
<table>

## Veja aovivo
*[rappi4.surge.sh](http://rappi4.surge.sh/)*

## Sobre
Elaboramos o design do app de comida favorito do Brasil, agora com cara nova está delicinha de mais!

Este projeto está muito bem organizado em pastas para cada tipo de conteúdo, com cada item da categoria tendo uma pasta, onde se encontra a estrutura lógica no arquivo index.jsx, e as estilizações no arquivo de estilo modular scss.

Temos um service file com os métodos utilizados no app, de forma a aproveitar as chamadas, e ainda usando uma function base para reaproveitamento de código, elaborando 11 chamadas assíncronas da API em apenas 50 linhas bunitinhas.

Utilizamos global states com react context api, de modo a reutilizar informações no app, o principal contexto é o cart, onde está definido dentro do contexto todas propriedades e operações relacionados ao carrinho, de modo a simplificar, organizar e facilitar o uso, tendo todas movimentações em um único objeto. Lindo de mais.

Usamos também context api para thema do projeto, e auth provider, juntando tudo em um componente GlobalState para fornecer todos os estados globais de um mesmo componente pai para simplificar e deixar mais limpo o código.

## Fizemos vários hooks customizados para este projeto, como:

### useGo
hook para facilitar a navegação nas páginas, para fácil uso em qualquer local, como por exemplo go.home, go.cart, de forma simples sem precisar utilizar history toda gora, o hook export todas operações em formado de objeto, e há opeções de passar também estados entre as mudanças de rotas.

### useForm
hook completinho para utilização em form, inspirado no react-hook-form, este é nossa lib melhor que o original, controla todos os dados e inputs do formulários, com o método register, indicando apenas o nome como argumento, além de opções para validação e mask, para controla automático da validação, com as propriedades error e success para controlar o estado de validação de cada item do form, e os métodos de verify para verificar campos em branco ou com erros de validação, e acionar o texto helper.

### useRequest
Best hook of the world, contruímos um hook completão de request, para uso no app de forma muito fácil e organizado, o hook recebe um serviço de api e retorna o estado com estes dados, além dos estados indicando se está carregando para fazer loadings, e o estado de erro para verificar os problemas nas requisições, além de várias opções que podem ser passadas, como selecionar uma propriedade no retorno a fim de facilitar o manuseio dos dados retornados, e opeções para não iniciar a chamada de imediato, ficando em espera para uso posterior com alguma interação com o usuário.

### useProtectedPage
Verificar em todas as rotas se há autenticação do usuário, e redireciona para tela de login caso não tenha autenticação, este hook é usamos apenas no componente Layout, onde carrega todos os compoentens do projeto, facilitando o uso de forma simples e eficiente.

## Componentes
Fizemos componentes reutilizáveis em todo o projeto, para escrever o mínimo de código possível e não precisar repetir código e estilização.
Fizemos também uma biblioteca dos componentes para fim de controle e organização com o storybook, várias histórias de componentes durante a vida do app.

## SASS Style
Optamos por utilizar o sass, para facilitar o desenvolvimento, além de ser muito potento com vários recursos, ele faz exatamente a proposta do react, em separar tudo de forma modular e restrita, além de componentizar os próprios estilos com variable, mixins, sass components, functions e etc.


## Dependências
* React CRA
* SASS
* classNames
* React Router
* Storybook

## Como rodar?
`
yarn && yarn start
`

## Biblioteca de componente
`
yarn storybook
`


### Imagens
![Screenshot from 2021-05-11 15-14-11](https://user-images.githubusercontent.com/7757352/117864805-953d4f00-b26b-11eb-8035-360d8f4b1f26.png)
![Screenshot from 2021-05-10 16-03-02](https://user-images.githubusercontent.com/7757352/117711227-5646c500-b1a9-11eb-89de-848b8a96867e.png)
![Screenshot from 2021-05-11 15-10-58](https://user-images.githubusercontent.com/7757352/117864491-41326a80-b26b-11eb-9b8a-fd8ad07b03b3.png)
![Screenshot from 2021-05-13 01-01-32](https://user-images.githubusercontent.com/7757352/118075655-d70ee800-b386-11eb-82b4-f02059a30609.png)
![Screenshot from 2021-05-13 01-00-58](https://user-images.githubusercontent.com/7757352/118075660-da09d880-b386-11eb-8453-da53a2ebcfa4.png)
![Screenshot from 2021-05-13 01-00-21](https://user-images.githubusercontent.com/7757352/118075663-dd04c900-b386-11eb-971a-6f6b86d2b47a.png)
![Screenshot from 2021-05-13 00-59-20](https://user-images.githubusercontent.com/7757352/118075675-e3934080-b386-11eb-8214-b5b2bfa817be.png)
![Screenshot from 2021-05-13 00-58-09](https://user-images.githubusercontent.com/7757352/118075678-e68e3100-b386-11eb-8745-8312db87f6a3.png)



### Fluxograma
usamos o whimsical para elaborar o fluxograma de componentes do nosso app, ótima ferramenta, muito intuitiva para elaboração desses tipos de gŕaficos e fluxos.
https://whimsical.com/rappi4-SxyhiPA5g1Gr4ssthbCkxT

### API
Utilizamos a API feita em nodejs pelo tipo de instrutores do backend da Labenu, está documentado no postman docs
https://documenter.getpostman.com/view/7549981/SWTEdGtT#3203689e-ea05-466a-8a5a-8ebc6c5f271e

### DESIGN
Recebemos o design prototype pronto da designer Camila Mizutani, elaborado no zeplin 
https://app.zeplin.io/project/5dd5ae92669af1bc817c8359

### NOTION
Instruções da equipe gestora do curso para elaboração do projetinho
https://www.notion.so/WFS13-Projeto-Final-do-Frontend-20ac39457b9344aab3863527a0032196
