# Plataforma-de-Turismo com Autenticação JWT

API RESTful desenvolvida para gerenciamento de locais turísticos como hotéis, restaurantes, passeios, entre outros. Possui autenticação com JWT, validação de dados, e separação clara entre responsabilidades utilizando a arquitetura MVP (Model-View-Presenter).

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Prisma ORM** (com SQLite)
- **JWT (JSON Web Tokens)**
- **Zod** (validação de dados)
- **Bcrypt** (criptografia de senhas)
- **Arquitetura MVP**

---

## 📁 Estrutura do Projeto

prisma/
src/
├── controllers/
├── database/
├──  middlewares/
├── routes/
├── schemas/
├── utils/
├── app.js
└── server.js

---

## 🔐 Autenticação e Autorização

- Login e registro para **usuários** e **admins**.
- Apenas **admins** podem cadastrar novos locais.
- JWT utilizado para proteger rotas privadas.

---

## 📦 Instalação e Execução

```
# Clone o repositório
git clone git@github.com:amaralneto10/Plataforma-de-Turismo.git

# Acesse a pasta
cd Plataforma-de-Turismo

# Instale as dependências
npm install


# Execute as migrações e crie o banco
npx prisma db push

# Inicie o servidor
npm run dev

📚 Endpoints Principais
🧑 Usuários
Registro de usuário
POST /register

{
  "name": "João",
  "email": "joao@gmail.com",
  "phone": "88999999999",
  "password": "senha123"
}

Registro de admin
POST /register-adm

{
  "name": "João",
  "email": "joao@gmail.com",
  "phone": "88999999999",
  "password": "senha123"
}

Login
POST /login

{
  "email": "joao@gmail.com",
  "password": "senha123"
}

🏨 Locais
Criar novo local (admin)
POST /novo-lugar
Requer token JWT com permissão de admin

{
  "name": "Pousada Paraíso",
  "description": "A melhor da cidade",
  "address": "Rua das Flores, 123",
  "type": "hotel", // hotel | pousada | casa | restaurante | passeio | outro
  "rating": 4.5,
  "priceRange": "R$150 - R$300"
}

Listar todos os locais
GET /listar-todos

Listar locais por tipo
GET /listar-tipo

Atualizar locais
PUT /local/:id

Excluir local
DELETE /deletar-local/:id

✅ Regras de Negócio
Apenas admins podem criar locais turísticos.

Validação com Zod garante tipos corretos e segurança na entrada de dados.

Token JWT necessário para acessar rotas protegidas.

🛠 Variáveis de Ambiente
Crie um arquivo .env com:
JWT_SECRET=sua_chave_secreta

📌 Considerações Finais
Este projeto foi desenvolvido com foco em boas práticas de backend, autenticação segura e estruturação escalável. Ideal para aplicações de turismo, guias locais e afins.

📬 Contato
Desenvolvido por Amaral Neto
Email: alunoamaralneto@gmail.com
