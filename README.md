# Zero dependency mini-framework (ZDMF)

:warning: **Antes de qualquer coisa, quero que fique claro, este projeto é uma ideia de estudo/desafio. Não estou tentando criar uma solução nova e nem tão pouco tirar o brilho de soluções já existentes! Quero tão somente por meio deste projeto demonstrar como as coisas funcionam partindo do zero a uma solução funcional!**

> *Não é só você que está sendo desafiado. Também estou nesse jogo, afinal de contas tudo faz parte de um aprendizado e aperfeiçoamento contínuo...*

Você diria que é um desenvolvedor ou um usuário de dependências? Para responder a essa pergunta imagine que você recebeu uma das missões abaixo:

- Construir uma API de controle de estoque;
- Desenvolver um blog com painel administrativo; ou
- Criar um framework para um cenário específico…

Nenhum dos tópicos listados teve seu escopo detalhado, logo seus requisitos poderiam ser tão simples ou complexo quanto possível, porém, se mesmo antes de pensar a respeito você já foi enumerando (listando) quais bibliotecas ou frameworks de terceiros poderia utilizar para concluir qualquer um dos desafios apresentados, então você corre o sério risco de ser confundido com um usuário de dependências.

> Não tome isso como uma crítica ruim! Continue lendo para entender.

No dia a dia realmente DEVEMOS considerar utilizar bibliotecas e frameworks de terceiros, isso normalmente tem relação com ganho de produtividade ao utilizar soluções já prontas, porém, não devemos cair na armadilha de virarmos reféns de dependências de terceiros. Você pode ficar surpreso com a próxima afirmação, mas ela representa a realidade nua e crua:

Um usuário de dependências ficará perdido, sem chão caso as bibliotecas ou frameworks de terceiros que ele utiliza deixem de existir. Já um desenvolvedor, por compreender aquela implementação e os conceitos por trás, ou criará sua própria implementação ou irá migrar aquele contexto para uma outra dependência que atenda a seus requisitos, tudo isso sem fazer drama algum.

> *Se você afirmar que estou falando para não utilizar dependências externas (bibliotecas/frameworks) eu irei te chamar de mentiroso(a)! Estou tão somente pontuando a importância de saber como as coisas realmente funcionam por trás da elegância, facilidade, produtividade e charme das soluções prontas. No meu dia a dia utilizo inúmeras dependências que facilitam minha vida, tais como: Express, Adonis, BodyParser, Consign e muitas outras.*

## Minha proposta

Recebi um email que me instigou a criar este projeto. Conteúdo do email:

> Fábio, estou criando um projeto e me vi obrigado a utilizar o Express para lidar com acesso HTTP. Não enxerguei uma alternativa para trabalhar com rotas sem utilizar o framework citado…

O email continua por mais algumas linhas, porém, este foi o trecho que me instigou a criar este projeto. Pelo contexto da conversa vejo que o autor não está feliz em utilizar o Express para trabalhar com rotas, não pelo fato de ser uma solução ruim, longe disso, o Express é ótimo! Sua infelicidade está no fato de não compreender como funciona essa história de rotas, em não saber como adotar estratégias alternativas, ou até mesmo, será que para essa finalidade especifica seria necessário utilizar uma dependência externa?

Então resumindo, meu desafio é simples. Estou disponibilizando uma ideia mínima, não estruturada e ainda não aderente à patterns. Você deve fazer um fork deste projeto e começar a contribuir para com sua melhoria atendendo aos objetivos listados no próximo tópico. *Lembrando: também estou fazendo parte deste desafio!*

## Objetivos

Construir um framework de dependência zero, ou seja, é estritamente proibido incluir qualquer dependência de terceiro neste projeto!

### Sugestões de melhoria:

- Definir como será trabalhada a questão do git e boas práticas de gestão de projetos;
- Definir uma estrutura de diretórios/arquivos para o projeto;
- Definir se irá utilizar MVC ou qualquer outro padrão de projeto;
- Definir quais recursos o framework deverá ter:
  - Rotas;
  - Middlewares:
    - De segurança
    - De tratamento/validação de dados de entrada
  - Autoloader;
  - //… serão definidos em breve

### Regras

- Todo commit deve ser feito em português
- Comentários no código deve ser em português
- Nome de variáveis, funções ou qualquer outro item de código deve ser escrito em inglês

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
