# Reactwars

Aplicação desenvolvida como solução do teste para vaga de frontend da Inovamind.

A aplicação consiste em um SPA (Single Page Application), contendo telas para a seguinte ações:
- **Cadastro de usuários**
- **Login**
- **Tela principal**: aqui o usuário escolhe qual categoria (personagens, planetas ou espaçonaves) quer listar, além da possibilidade de realizar *logout* na aplicação.
- **Listagem de dados**: de acordo com a categoria selecionada pelo usuário, uma lista de dados é gerada e exibida
- **Exibir detalhes**: utilizada para exibir as informações de um objeto da lista gerada na tela anterior, de acordo com sua categoria

# Tecnologias utilizadas

- Para desenvolver cada tela, foi utilizado o ReactJS
- Para realizar a navegação entre as telas, foi utilizado a biblioteca [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Os dados dos usuários registrados na aplicação foram armazenados utilizando o [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage)
- As buscas na API foram realizadas através da biblioteca [axios](https://github.com/axios/axios)
- A internacionalização da aplicação foi realizada utilizando a biblioteca [react-intl](https://github.com/formatjs/react-intl)
- Os dados recebidos da API foram armazenados utilizando o [Redux](https://redux.js.org/)
- Em grande parte da aplicação, os hooks foram utilizados para realizar diversas ações importantes para o bom funcionamento da mesma


# Execuntando a aplicação

Com o ambiente React/Node.js configurado e o repositório clonado, execute os seguinte passos:

```shell
$ cd reactwars

## Instalando as bibliotecas necessárias
$ npm i
## ou
$ yarn install

## Executando a aplicação
$ yarn start
## ou
$ npm run start
```