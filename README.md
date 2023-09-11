# Projeto Finanças

---

## Escopo

Criar um projeto Angular 15, utilizando a abordagem SPA com as seguintes funcionalidades:

- Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);
- Criar uma pagina de cadastro de finanças com funcionalidade de filtro por mes e ano.
- Criar duas rotas, categorias e gastos cadastrados, através de uma lista customizavel.
- Criar a rota linkando uma página a outra (Adicionar Categoria e Adicionar Entrada), sincronizada calculando de acordo com mes e ano selecionado.
- Implementar o consumo da API disponibilizadas, através dos dois endpoints:
    - API de Categorias
    - API de Entradas
- Criar um design básico para páginas (pode ser utilizado o
bibliotecas/frameworks como bootstrap ou material-UI design disponíveis
no repositório do npm)

## Tecnologias

- Angular CLI 15.2.5
- Node.js 18.17.1
- JSON Server

## Como instalar

- Baixe ou clone este repositório usando

```powershell
git clone https://github.com/igorhlr/Angular15-Praticando-1.git
```

- Dentro do diretório, instale as dependências usando

```powershell
npm install
```

- Dentro do diretório, Execute o db.json

```powershell
npm i json-server
```

## Como executar

Execute para executar a versão de desenvolvimento. 

```powershell
ng serve 
```

Depois acesse `http://localhost:4200/`.

Para executar o servidor de endpoints de API, em um outro terminal na mesma pasta execute:

```powershell
json-server --watch db.json
```

A API poderá ser acessada via `http://localhost:3000/`.

## Como compilar/construir

Execute, para buildar o projeto. Para buildar a versão de produção adicione a flag `--prod`. Os arquivos serão armazenados do diretório `dist`.

```powershell
 ng build 
```

## Dúvidas

Caso há alguma dúvida em relação a este repositório, envie para igorhlr3@hotmail.com

---

## Dashboard

![Untitled](/dashboard.png)

## Categorias

![Untitled](/categorias.png)

## Entradas

![Untitled](/entradas.png)

---