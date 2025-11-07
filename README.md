# Webstore Reaction

## Visão Geral
Este projeto é uma loja virtual (webstore) responsiva construída usando JavaScript e React. Ele fornece uma interface amigável para navegar e comprar produtos.

## Estrutura do Projeto
```
A estrutura do projeto foi organizada de forma a separar responsabilidades, facilitando a manutenção e escalabilidade:

/lojareaction
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
├── README.md             # Este arquivo
├── public/               # Arquivos estáticos
│   ├── img/              # Imagens dos produtos
│   ├── index.html        # Template HTML principal (onde o React é injetado)
│   └── manifest.json     # Metadados do app
└── src/                  # Código-fonte principal do React
    ├── components/       # Componentes reutilizáveis (pequenos)
    │   ├── CartWidget.js   # Ícone do carrinho no header
    │   └── ProductCard.js  # Card de produto na Home
    ├── context/          # Context API do React
    │   └── CartContext.js  # Lógica global do carrinho de compras
    ├── firebase/         # Configuração da conexão com o Firebase
    │   └── config.js
    ├── pages/            # Componentes que representam "páginas"
    │   ├── Cart.js         # Página do carrinho
    │   ├── Home.js         # Página inicial (listagem de produtos)
    │   └── ItemDetail.js   # Página de detalhes de um produto
    ├── services/         # Funções que lidam com lógica externa
    │   └── firestoreService.js # Funções para buscar dados no Firebase
    ├── styles/           # Arquivos de estilo
    │   └── main.css        # Estilos globais
    ├── App.js            # Componente raiz (define o roteamento)
    └── index.js          # Ponto de entrada do React

Funcionalidades
-Design responsivo para visualização otimizada em vários dispositivos.
-Listagem de produtos com detalhes individuais de cada produto.
-Capacidade de adicionar produtos ao carrinho de compras.

Instruções de Configuração
Clone o repositório:
git clone [https://github.com/mlcrodrigues/lojareaction.git]
 ```
Navegue até o diretório do projeto:
 ```
cd lojareaction
 ```
Instale as dependências:
Este projeto usa npm para gerenciar os pacotes. Rode o comando abaixo para instalar todas as dependências (React, Firebase, etc.):
 ```
npm install
 ```
Configurar o Firebase (Obrigatório)

O projeto se conecta ao Firebase para buscar os produtos. Você precisa fornecer suas chaves de API para que o aplicativo funcione.

Na raiz do projeto (na pasta lojareaction), crie um arquivo chamado .env.local.

Copie e cole o bloco abaixo dentro do arquivo .env.local:

Importante: Substitua os valores "..." pelas suas chaves reais do Firebase.
 ```
# .env.local
# Estas chaves são lidas pelo React para conectar ao Firebase.

REACT_APP_FIREBASE_APIKEY="SUA_CHAVE_API_AQUI"
REACT_APP_FIREBASE_AUTHDOMAIN="seu-projeto.firebaseapp.com"
REACT_APP_FIREBASE_PROJECTID="seu-projeto-id"
REACT_APP_FIREBASE_STORAGEBUCKET="seu-projeto.firebasestorage.app"
REACT_APP_FIREBASE_MESSAGINGSENDERID="SEU_SENDER_ID"
REACT_APP_FIREBASE_APPID="SEU_APP_ID"
 ```

##Uso
Abra seu navegador e acesse http://localhost:3000 para ver a loja.
Navegue pelos produtos e adicione itens ao seu carrinho.

##Tecnologias Utilizadas
-React
-JavaScript
-CSS

