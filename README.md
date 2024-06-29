## Anotações

- API -> REST (arquivos json para comunicação)

- Métodos HTTP:
- GET (lista),
- POST (cria),
- PUT (atualização de recursos),
- DELETE (apagar uma informação), PATCH, HEAD, OPTIONS ...

- Corpo da requisição (Request body)
- Parâmetros de busca (Search Params / Query Params) `http://localhost:3333/users?name=Diego`
- Parâmetros de rota (Route Params) -> Identificação de recursos, usado apra alteração em um único recurso `http://localhost:3333/users/`
- Cabeçalhos (Contexto da requisição) Por exemplo: Informações de autenticação, localização do usuário...
## Banco de dados:
- Driver nativo / Querybuilders / ORMs
- Query Builder -> Knexjs
- ORM -> Object Relational Mapping --- Sequelize / Prisma / Drizzle
- Prisma.io
