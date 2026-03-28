# 📖 Diário Pessoal · Ideias & Projetos

Um diário digital elegante para anotar ideias, planejar projetos e registrar aprendizados. Com autenticação por senha única e armazenamento local.

## 🔐 Configuração da Senha

1. Abra o arquivo `index.html`
2. Localize a linha: `const SENHA_CORRETA = "minhaSenha123";`
3. Altere para a senha que você quiser

**Importante:** Esta senha fica no código HTML. Se você quiser mais segurança, veja a seção "Versão Avançada" abaixo.

## 🚀 Como Usar

1. Abra o `index.html` no navegador
2. Digite sua senha e clique em "Abrir Diário"
3. Use os blocos para estruturar suas anotações:
   - **Título:** Para seções principais
   - **Subtítulo:** Para subseções
   - **Texto:** Para anotações livres
   - **Citação:** Para destacar algo importante
   - **Checklist:** Para tarefas e afazeres

## 💾 Persistência

Todos os dados são salvos automaticamente no `localStorage` do seu navegador. Nada sai do seu computador.

## 📄 Exportação PDF

Clique no botão "PDF" para gerar um arquivo PDF da página atual.

## 🛠️ Tecnologias

- HTML5 / CSS3
- JavaScript puro (sem frameworks)
- html2pdf.js para exportação
- localStorage para persistência

## 🔒 Versão Avançada (Mais Segura)

Para não expor a senha no repositório:

1. Crie um arquivo `config.js` na mesma pasta:
```javascript
// config.js
const SENHA_CORRETA = "sua-senha-aqui";
