## Requisitos funcionais - funcionalidades da aplicação o que o usuário pode fazer dentro do app

- [x] deve ser possível se cadastrar
- [x] deve ser possível se autenticar
- [x] deve ser possível obter o perfil de um usuário logado
- [x] deve ser possível obter o número de checkins realizados pelo usuário
- [x] deve ser possível o usuário obter seu histórico de checkins
- [x] deve ser possível o usuário buscar academias próximas
- [x] deve ser possível o usuário buscar academias pelo nome
- [x] deve ser possível o usuário realizar checkin em uma academia
- [x] deve ser possível validar o checkin de um usuário
- [x] deve ser possível cadastrar uma academia

## Regras de negócios - caminhos de cada requisito condições aplicadas, sempre associadas ao requisito funcional (os ifs elses)

- [x] o usuário não pode se cadastrar com um e-mail duplicado
- [x] o usuário não pode fazer dois checkins no mesmo dia
- [x] o usuário não pode fazer checkins se não estiver a 100 metros da academia
- [x] o checkin so pode ser validado até 20 minutos após criado
- [x] o checkin so pode ser validado por administradores
- [x] a academia so pode ser cadastrada por administradores

## Requisitos não funcionais - não partem do cliente são técnicos qual banco de dados, qual cache, qual paginação, etc só a gente entende, não o usuário final

- [x] a senha do usuário precisa estar criptografada
- [x] os dados da aplicação precisam estar persistidos em um banco postgres
- [x] todas listas de dados precisam estar paginadas com 20 itens por página
- [x] o usuário deve ser identificado por um JWT

---
