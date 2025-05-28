# Animais Fantásticos

## 📖 Sobre o Projeto

**Animais Fantásticos** é uma aplicação web desenvolvida onde foi inicialmente inspirado em um curso da Origamid, mas foi totalmente remodelado por mim. Reestruturei o código, redesenhei a interface e adicionei novas funcionalidades juntamente com um layout responsivo, utilizando React, TypeScript, Tailwind CSS e Vite. O intuito deste website e para conscientizar sobre a preservação de espécies ameaçadas de extinção. O projeto apresenta informações sobre diferentes animais (como lobos, raposas, esquilos e ursos), exibe estatísticas sobre o número de espécies, também oferece uma seção de perguntas frequentes (FAQ) com orientações sobre como ajudar na proteção dessas espécies, e também uma seção de contato com algumas informações minhas.

### Funcionalidades

- **Navegação Intuitiva**: Barra de navegação com links para seções como "Animais", "FAQ" e "Contato".
- **Estatísticas**: Exibe números atualizados sobre populações de animais ameaçados.
- **FAQ**: Responde a perguntas comuns sobre preservação de espécies.
- **Modal de Login**: Interface para login, acessível via botão na barra de navegação.
- **Design Responsivo**: Layout adaptável para dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

- **Figma**: Para Prototipagem do projeto.
- **React**: Biblioteca JavaScript para construção de interfaces.
- **TypeScript**: Para tipagem estática e maior segurança no código.
- **Vite**: Ferramenta de build rápida e otimizada.
- **Tailwind CSS**: Framework de estilização.
- **Vercel**: Configuração para deploy (presente no `vercel.json`).

## 🌐 Deploy

O projeto está configurado para deploy na Vercel.

## 📂 Estrutura do Projeto

- **`App.tsx`**: Componente principal que gerencia o estado do modal de login e organiza as seções da página.
- **`Layout.tsx`**: Define o layout responsivo da aplicação, usando um grid para desktops e um layout em coluna para dispositivos móveis.
- **`components/`**: Contém os componentes reutilizáveis como `Navbar`, `Modal`, `Introduction`, `Faq`, `Numbers`, `Contato` e `Footer`.
- **`hooks/`**: Contém custom hooks do React, como `useForm.ts`, `useCountUpOnView.ts`, `useScrollFadeIn.ts` para gerenciar estados.
- **`interface/`**: Contém todas as definições de tipos e interfaces do TypeScript que são utilizadas no projeto.
- **`data/`**: Contém dados estáticos, como `NumbersData.ts` com informações sobre os numeros dos animais e perguntas do FAQ.
- **`styles/`**: Contém os estilos globais utilziados.

## 🤝 Como Contribuir

- Contribua para o projeto e faça um fork do repositório.

## 📬 Contato

Para dúvidas ou sugestões, acesse a seção "Contato" na aplicação ou envie um e-mail para [parceriasnyx@gmail.com].

---

Feito com ❤️ por Danilo Lopes!
