# Sistema de Compras Online

## Descrição do Projeto

Este projeto consiste na criação da aplicação backend de um sistema de compras online, desenvolvido com NestJS e TypeScript, utilizando o SQLite como banco de dados. O sistema permite aos usuários selecionar produtos, adicioná-los a um carrinho virtual e realizar compras. Além disso, foram implementadas funcionalidades de validação de dados e documentação para facilitar o uso da aplicação.

## Passo a Passo para Executar a Aplicação

Para executar a aplicação localmente, siga estas etapas:

1. Clone este repositório em sua máquina local:

   ```
   git clone https://github.com/breno-gabriel/Desafio-Visagio-Rocketlab.git
   ```

2. Instale as dependências:

   ```
   npm install
   ```

   ou

   ```
   yarn install
   ```

3. Execute as migrações do banco de dados:

   ```
   npx prisma migrate dev
   ```

4. Para visualizar o banco de dados:

   ```
   npx prisma studio
   ```

5. Inicie o servidor de desenvolvimento:

   ```
   npm run start:dev
   ```

   ou

   ```
   yarn start:dev
   ```

6. Instale o Swagger:

   ```
   npm install --save @nestjs/swagger
   ```

7. Acesse a documentação da API em seu navegador:

   ```
   http://localhost:3000/api
   ```

## Funcionalidades Principais

- **Cadastro de Produtos:** Permite adicionar, remover e atualizar produtos no sistema, com informações associadas.
- **Busca de Produtos:** Possibilita buscar um ou mais produtos específicos com base em critérios de busca.
- **Finalização de Compra:** Permite finalizar a compra do carrinho de compras, realizando o fechamento da transação.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- SQLite
- Prisma

## Estrutura do Projeto

- **src/**
- **database/**: Contém configurações do Prisma.
- **module/**
 - **product/**
   - **controller/**: Contém os controladores relacionados aos produtos.
   - **dto/**: Classes de transferência de dados relacionadas aos produtos.
   - **service/**: Serviços relacionados aos produtos.
 - **user/**
   - **controller/**: Contém os controladores relacionados aos usuários.
   - **dto/**: Classes de transferência de dados relacionadas aos usuários.
   - **service/**: Serviços relacionados aos usuários.
- **app.module.ts**: Módulo principal da aplicação.
- **main.ts**: Ponto de entrada da aplicação.

## Observação 

Na rota 'http://localhost:3000/user/buying'

o tipo de dado que precisa ser passado é semelhante a esse: 

[
  {
    "id": "e07c888c-415d-4eed-902c-3ff840ee74be",
    "productName": "Lenovo Gaming 3i",
    "productImage": null,
    "description": "Notebook baratinho e bom",
    "sellerName": "Joazinho69",
    "sellerEmail": "joaogomes@gmail.com",
    "sellerCellphone": "(81) 99865-1445",
    "price": "15000",
    "creatAt": "2024-05-26T17:00:34.039Z"
  },
  {
    "id": "59246ee2-f520-4ff3-8cac-ad92e990272c",
    "productName": "Lenovo Gaming 3i",
    "productImage": null,
    "description": "Notebook gamer custo benefício",
    "sellerName": "Jorge Caneco",
    "sellerEmail": "joaogomes@gmail.com",
    "sellerCellphone": "(81) 99865-1445",
    "price": "15000",
    "creatAt": "2024-05-26T17:02:40.027Z"
  },
  {
    "id": "ffcd1806-9939-4d7b-b641-3262fedec4ee",
    "productName": "Acer Nitro 5",
    "productImage": "http://http2.mlstatic.com/D_767204-MLB76491272819_052024-W.jpg",
    "description": "Notebook Gamer Nitro V15 Anv15-51-57ws I5 Lx 8gb 512gb Ssd",
    "sellerName": "Jõao Cavalcanti",
    "sellerEmail": "sucaina7924@uorak.com",
    "sellerCellphone": "(55) 91111-1111",
    "price": "3000",
    "creatAt": "2024-05-28T01:08:32.674Z"
  }
]


