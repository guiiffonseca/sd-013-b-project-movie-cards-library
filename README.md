### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do
Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto Movie Cards Library!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_!

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Dica: desativando testes](#dica-desativando-testes)
  - [Dica: watch mode](#dica-watch-mode)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [1 - Crie um componente `<Header />`](#1---crie-um-componente-header-)
  - [2 - Renderize um texto no `<Header />`](#2---renderize-um-texto-no-header-)
  - [3 - Crie um componente `<MovieList />`](#3---crie-um-componente-movielist-)
  - [4 - Renderize componentes `<MovieCard />` dentro de `<MovieList />`](#4---renderize-componentes-moviecard--dentro-de-movielist-)
  - [5 - Passe uma key para cada `<MovieCard />` renderizado](#5---passe-uma-key-para-cada-moviecard--renderizado)
  - [6 - Crie um componente `<MovieCard />`](#6---crie-um-componente-moviecard-)
  - [7 - Renderize a imagem do filme dentro de uma tag `img`](#7---renderize-a-imagem-do-filme-dentro-de-uma-tag-img)
  - [8 - Renderize o título do filme dentro de uma tag `h4`](#8---renderize-o-título-do-filme-dentro-de-uma-tag-h4)
  - [9 - Renderize o subtítulo do filme dentro de uma tag `h5`](#9---renderize-o-subtítulo-do-filme-dentro-de-uma-tag-h5)
  - [10 - Renderize a sinopse do filme dentro de uma tag `p`](#10---renderize-a-sinopse-do-filme-dentro-de-uma-tag-p)
  - [11 - Crie um componente `<Rating />`](#11---crie-um-componente-rating-)
  - [12 - Renderize a nota de um filme dentro de `Rating`](#12---renderize-a-nota-de-um-filme-dentro-de-rating)
  - [13 - Renderize o componente `<Rating />` dentro de `<MovieCard />`](#13---renderize-o-componente-rating--dentro-de-moviecard-)
  - [14 - Passe como prop para o componente `<Rating />` o atributo `rating`](#14---passe-como-prop-para-o-componente-rating--o-atributo-rating)
  - [15 - Crie um componente `<App />`](#15---crie-um-componente-app-)
  - [16 - Renderize `<MovieList />` dentro do componente `<App />`](#16---renderize-movielist--dentro-do-componente-app-)
  - [17 - Adicione PropTypes a todos os componentes](#17---adicione-proptypes-a-todos-os-componentes)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

# Habilidades

Nesse projeto, você será capaz de:

- Saber a melhor forma para instalar um gerenciador de pacotes
- Inicializar um projeto em **React**
- Utilizar JSX no **React**
- Utilizar o **ReactDOM.render** para renderizar elementos numa página web
- Utilizar o `import` para usar código externo junto ao seu
- Criar componentes **React** corretamente
- Fazer uso de `props` corretamente
- Fazer composição de componentes corretamente
- Criar múltiplos componentes dinamicamente
- Utilizar **PropTypes** para checar o tipo de uma prop no uso de um componente
- Utilizar **PropTypes** para garantir a presença de props obrigatórias no uso de um componente
- Utilizar **PropTypes** para checar que uma prop é um objeto de formato específico
- Utilizar **PropTypes** para garantir que uma prop é um array com elementos de um determinado tipo

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre
[Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você deverá desenvolver uma biblioteca de cartões de filmes utilizando React. A biblioteca deverá possuir um cabeçalho e uma lista de cartões. Cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação. A biblioteca deverá ser algo parecido com a imagem abaixo.

![image](preview.png)

## Desenvolvimento

Desenvolva uma aplicação **React** que seja composta por um `conjunto de componentes` React.

## Data de Entrega

- Será `1` dia de projeto.
- Data de entrega para avaliação final do projeto: `29/07/2021 - 14:00h`.

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone https://github.com/tryber/sd-013-b-project-movie-cards-library.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-013-b-project-movie-cards-library`

2. Instale as dependências, inicialize o projeto e rode os testes

- Instale as dependências:

  - `npm install`

  ⚠️ **ATENÇÃO** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto e essa atualização gera conflitos com o avaliador. ⚠️

- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Verifique que os testes estão executando:
  - `npm test` (os testes devem rodar e falhar)

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-movie-cards-library`

4. Adicione alguma mudança ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _components_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _components/Header.jsx_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-movie-cards-library`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-movie-cards-library/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-movie-cards-library/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

- ⚠ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

Este repositório já contem um _template_ com um App React criado e configurado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. Você deverá completar este _template_ implementando os requisitos listados na próxima seção.

Será necessário criar quatro `React Components`:

- Header
- MovieList
- MovieCard
- Rating

Cada componente representa uma parte específica do site, conforme ilustrado abaixo:

![image](site-outline.png)

Todos os componentes devem ser criados dentro da pasta `src/components`. **É importante que seus componentes tenham exatamente os nomes listados acima**.

Todos os requisitos do projeto serão testados automaticamente. Os testes para cada requisitos estão na pasta `src/tests`.Gaste um tempo lendo os arquivos para entender como os testes estão organizados.

Para executar os testes localmente, digite no terminal o comando `npm test`. Inicialmente, seus testes estarão assim:

![image](failing-tests.png)

A primeira parte da saída mostra um sumário de cada teste e seu status. Um ❌ representa um teste falhando, enquanto um ✅ representa um teste correto. Naturalmente, no início todos os testes estarão falhando.

Abaixo do sumário, para cada teste falhando, há uma mensagem explicativa sobre o motivo que causou a falha do teste, assim como a linha em que a falha ocorreu. Na imagem, vemos que o teste falha porque o componente `<Header />`, utilizado na linha 38, não está definido.

Se fizermos uma implementação simples do componente `<Header />`, que não renderiza nada:

```jsx
import React from "react";

class Header extends React.Component {
  render() {}
}

export default Header;
```

Veremos que o primeiro teste agora passa:

![image](first-green-test.png)

Quando seu projeto estiver terminado, todos os testes deverão estar passando:

![image](all-green.png)

---

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

---

## Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```js
it.skip("it includes the text `Movie Cards Library` inside a h1 tag", () => {
  wrapper = shallow(<Header />);

  expect(wrapper.find("header h1").text()).toBe("Movie Cards Library");
});
```

Na saída da execução dos testes, você verá um <img src="orange-circle.png" width="15px"> indicando que o teste está sendo pulado:

![image](skipped-test.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. Testes ignoradados serão tratados como testes falhando.

## Dica: watch mode

Ao executar os testes localmente, [Jest](https://jestjs.io/), a ferramenta que executa os testes, entra em _watch mode_. Nesse modo, a cada vez que um arquivo é salvo, os testes são executados novamente. Isso pode aumentar sua produtividade removendo a necessidade de executar os testes manualmente o tempo todo. Você pode abrir uma aba no seu terminal ou no terminal do _VSCode_ e deixar o _Jest_ rodando nesse modo.

---

# Requisitos do projeto

Para melhor orientação nesse primeiro contato com React, os requisitos do projeto contém _subitens_ para guiar seu cumprimento. Assim sendo o requisito 1, por exemplo, contém os subitens `1.1` e `1.2`, com cada subitem associado a um teste. Um requisito só é considerado completo quando todos os seus subitens estão feitos. **Requisitos parcialmente feitos não são considerados!**

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **Lint** ⚠️

### 1 - Crie um componente `<Header />`

Criar um componente que represente o cabeçalho da página.

**O que será verificado:**

- Renderize o componente `<Header />`.

### 2 - Renderize um texto no `<Header />`

O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`

**O que será verificado:**

- Renderize o texto "Movie Cards Library" dentro de `<Header />`.

### 3 - Crie um componente `<MovieList />`

Crie um componente que represente toda a área com os cartões de filmes. `<MovieList />` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.

**O que será verificado:**

- Renderize o componente `<MovieList />`

### 4 - Renderize componentes `<MovieCard />` dentro de `<MovieList />`

`<MovieList />` deve renderizar um componente `<MovieCard />` para cada objeto contido no array recebido na prop `movies`.

**O que será verificado:**

- Renderize componentes `<MovieCard />` dentro de `MovieList`.

### 5 - Passe uma key para cada `<MovieCard />` renderizado

`<MovieList />` deve renderizar `<MovieCard />`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `<MovieCard />` deve receber uma prop `key` com o nome do filme.

**O que será verificado:**

- Passe uma key para cada `<MovieCard />` renderizado.

### 6 - Crie um componente `<MovieCard />`

Crie um componente que represente um cartão de filme. `<MovieCard />` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

**O que será verificado:**

- Renderize o componente `<MovieCard />`.

### 7 - Renderize a imagem do filme dentro de uma tag `img`

`<MovieCard />` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

**O que será verificado:**

- Renderize a imagem do filme dentro de uma tag `img`.

### 8 - Renderize o título do filme dentro de uma tag `h4`

`<MovieCard />` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

**O que será verificado:**

- Renderize o título do filme dentro de uma tag `h4`.

### 9 - Renderize o subtítulo do filme dentro de uma tag `h5`

`<MovieCard />` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

**O que será verificado:**

- Renderize o subtítulo do filme dentro de uma tag `h5`.

### 10 - Renderize a sinopse do filme dentro de uma tag `p`

`<MovieCard />` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

**O que será verificado:**

- Renderize a sinopse do filme dentro de uma tag `p`.

### 11 - Crie um componente `<Rating />`

Crie um componente que represente a avaliação de um filme.

**O que será verificado:**

- Renderize o componente `<Rating />`.

### 12 - Renderize a nota de um filme dentro de `Rating`

`<Rating />` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

**O que será verificado:**

- Renderize a nota de um filme dentro de `Rating`.

### 13 - Renderize o componente `<Rating />` dentro de `<MovieCard />`

`<MovieCard />` deve renderizar um componente `<Rating />`.

**O que será verificado:**

- Renderize o componente `<Rating />` dentro de `<MovieCard />`.

### 14 - Passe como prop para o componente `<Rating />` o atributo `rating`

`<MovieCard />` deve passar para o componente `<Rating />` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

**O que será verificado:**

- Passe como prop para o componente `<Rating />` o atributo `rating`.

- O valor da _prop_ `rating` é a propriedade `rating` do filme.

- Rating deve ter uma classe `rating`.

### 15 - Crie um componente `<App />`

O componente `<App />` deve renderizar um componente `<Header />`.

**O que será verificado:**

- Renderize `<Header />` dentro do componente `<App />`.

### 16 - Renderize `<MovieList />` dentro do componente `<App />`

O componente `<App />` deve renderizar um componente `<MovieList />`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Para isso, você precisará importar `data.js` dentro de `App.js`.

**O que será verificado:**

- Renderize `<MovieList />` dentro do componente `<App />`

### 17 - Adicione PropTypes a todos os componentes

Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas. O ESLint checa automaticamente declaração de proptypes, portanto seu Pull Request deverá passar pela verificação do linter para satisfazer esse requisito.

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
