# Aplicação serverless  

Esta é uma aplicação simples usando uma arquitetura serveless orientada a eventos com microsserviços.
Dois microserviços foram criados, um para CRUD de talentos e outro para validação de aderência com a vaga.

## Dependências
Esta aplicação foi construída utilizando a ferramenta de linha de comando serveless [serverless](https://www.npmjs.com/package/serverless),
que permite o CI e CD da aplicação.
Além disso foram utilizadas soluções da AWS para persistência de dados, autenticação e distribuição do aplicativo:
- S3 e DynamoDB
- Cognito
- API Gateway

### Uso

Para rodar a aplicação localmente é necessário primeiramente criar e definir as políticas de acesso na AWS.
Em seguida utilizar o comando na pasta do serviço desejado.

``` bash
$ serverless invoke local --function SERVICO_ESCOLHIDO
```
É possível utilizar os "mocks" para cada chamada utilizando o seguinte comando:

``` bash
serverless invoke local --function create --path mocks/MOCK_ESCOLHIDO.json
```

Para simular o API Gateway, utilize o comando abaixo: [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Para realizar o deploy da aplicação utilize o comando:

``` bash
$ serverless deploy
```

Ou para realizar o deploy de apenas uma aplicação:

``` bash
$ serverless deploy function --function SERVICO_ESCOLHIDO
```

#### Referências
Para a construção da aplicação foi usado como referência o site [serverless-satck](https://serverless-stack.com/).
Tanto para a criação da aplicação dentro da arquitetura quanto para a configuração da aruitetura da AWS.
