# E-Commerce Store

## Descrição
Este é um projeto de **Loja Virtual** desenvolvido usando **Node.js**, **Express**, **MongoDB**, e **Angular**. O objetivo é criar uma plataforma de e-commerce que permita gerenciar categorias, produtos e realizar operações básicas de CRUD (Create, Read, Update, Delete) através de uma API RESTful. Além disso, o projeto inclui documentação automática da API utilizando **Swagger**.

## Tecnologias Utilizadas
- Backend: **Node.js**, **Express**, **MongoDB**
- Frontend: **Angular**
- Documentação da API: **Swagger**
- Gerenciamento de Dependências: **npm**
- Controle de Versão: **Git**

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- **Node.js** (versão 14.x ou superior)
- **npm** (versão 6.x ou superior)
- **MongoDB** (versão 4.x ou superior)
- **Angular CLI** (caso queira executar o frontend)

## Estrutura do Projeto

```
e-commerce-store/
├── backend/
│   ├── routes/
│   │   └── category.js
│   ├── handlers/
│   │   └── category-handler.js
│   ├── db/
│   │   └── category.js
│   ├── swagger-output.json
│   ├── app.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Funcionalidades
- **Backend**:
  - CRUD de categorias (Criar, Listar, Atualizar, Deletar)
  - Documentação automática da API com Swagger
- **Frontend**:
  - Interface simples para exibir e gerenciar categorias

## Instalação

### Backend
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/e-commerce-store.git
   cd e-commerce-store/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o MongoDB:
   - Certifique-se de que o serviço do MongoDB esteja em execução na porta padrão (`mongodb://localhost:27017`).
   - O banco de dados utilizado é `e-commerce-store-db`.

4. Execute o servidor:
   ```bash
   npm start
   ```
   O servidor será iniciado em `http://localhost:3000`.

5. Acesse a documentação da API:
   - Acesse `http://localhost:3000/api-docs` para visualizar a documentação gerada pelo Swagger.

### Frontend
1. Navegue para o diretório do frontend:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o frontend:
   ```bash
   ng serve
   ```
   O frontend será iniciado em `http://localhost:4200`.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
