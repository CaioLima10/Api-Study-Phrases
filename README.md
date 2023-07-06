### Instalações

npm install express

npm install sqlite3

npm install cors

se tiver preferencia para iniciar o projeto

npm install nodemon

----

### Criar banco de dados

1: tenha a extenção Database client

2: dentro da pasta "repositories" crie phrases.db

3: tambem na pasta "repositories" crie o componente sql.sql

4: dentro do database client, entre em sqlite e conecta com a phrases.db

5: dentro de sql.sql crie a tabela

 CREATE TABLE phrases (id TEXT NOT NULL PRIMARY KEY , phrase  TEXT NOT NULL , priority  TEXT NOT NULL );

6: execute a tabela com ctrl + enter.

7: faça mesma coisa para phrasesMotivation.db

 CREATE TABLE motivationPhrases (id TEXT NOT NULL PRIMARY KEY , phrase  TEXT NOT NULL);

----

### inicia

https://localhost:3000

----
### Projeto back-end e front-end

back-end: Api-Study-Phrases

front-end: Study-Phrases






