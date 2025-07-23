# Desafio Filmes

## Como rodar o site localmente

Primeiro, vá para a pasta correta se você ainda não está nela

```bash
cd docs
```

Instale os pacotes necessários

```bash
npm install
```

Rode a aplicação em desenvolvimento

```bash
npm run dev
```

## Como fazer deploy do site

```bash
npm run build
npm run deploy
```

Você também pode criar um `alias` para rodar esses comandos de uma vez:

```bash
nano ~/.bashrc
alias RECEBA="npm run build && npm run deploy" # adicione no final do arquivo que for aberto
RECEBA # vai fazer tudo subir 
```
