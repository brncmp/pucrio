Este pequeno projeto corresponde ao frontend MVP de Desenvolvimento Full Stack - PUCRIO

ORIENTAÇOES PARA RODAR O PROJETO FRONTEND

Instalar todas dependencias com o seguinte comando: (garanta que tenha o vue instalado https://v2.vuejs.org/)
    npm install

Executar o projeto: (garanta que a porta usada seja a mesma porta em que está rodando o backend, caso queira mudar edite no arquivo .env.development)
    npm run serve

Acesse: (verifique a porta em que o projeto esta rodando no terminal)
    http://localhost:8080/

Documentacao da API externa utilizada: 
    https://rapidapi.com/trueway/api/trueway-matrix/pricing

Docker:
    docker build -t pucriofront .
    docker run -d -p 8080:8080 pucriofront
