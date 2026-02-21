# Guia de Deploy - Altum Sistemas Portfólio

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de ter:

- Uma conta no GitHub (para hospedar o código)
- Uma conta na Netlify (gratuita em https://netlify.com)
- Git instalado no seu computador

## 🚀 Passo 1: Preparar o Código

### 1.1 Inicializar Git (se ainda não fez)

```bash
cd altum-sistemas-portfolio
git init
git add .
git commit -m "Initial commit: Altum Sistemas portfolio"
```

### 1.2 Criar um repositório no GitHub

1. Acesse https://github.com/new
2. Crie um novo repositório chamado `altum-sistemas-portfolio`
3. Não inicialize com README (já temos um)
4. Clique em "Create repository"

### 1.3 Enviar código para o GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/altum-sistemas-portfolio.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário do GitHub.

## 🌐 Passo 2: Deploy na Netlify

### Opção A: Deploy Automático (Recomendado)

1. Acesse https://app.netlify.com
2. Clique em "Add new site" → "Import an existing project"
3. Escolha "GitHub"
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `altum-sistemas-portfolio`
6. Configure as opções de build:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
7. Clique em "Deploy site"

### Opção B: Deploy Manual (CLI)

1. Instale o Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Deploy do projeto:
```bash
netlify deploy --prod
```

## ⚙️ Configurações Importantes

### Build Settings

- **Build command**: `pnpm build`
- **Publish directory**: `dist`
- **Node version**: 22.x (recomendado)

### Environment Variables (se necessário no futuro)

Se precisar adicionar variáveis de ambiente:

1. Vá para "Site settings" → "Build & deploy" → "Environment"
2. Clique em "Edit variables"
3. Adicione suas variáveis

## 🔧 Personalização do Domínio

### Usar domínio da Netlify

Por padrão, seu site terá um domínio como `seu-site.netlify.app`

Para mudar o nome:
1. Site settings → Domain management
2. Clique em "Edit site name"
3. Digite o novo nome

### Usar domínio customizado

1. Site settings → Domain management
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: altum-sistemas.com.br)
4. Siga as instruções para configurar os DNS records

## 📝 Editar Conteúdo

### Informações de Contato

Edite o arquivo `client/src/components/Contact.tsx`:

```tsx
<a href="mailto:contato@altum.com" className="...">
  contato@altum.com
</a>
```

Substitua pelos seus dados reais.

### Projetos do Portfólio

Edite `client/src/components/Portfolio.tsx` e atualize o array `projects`:

```tsx
const projects = [
  {
    title: 'Seu Projeto 1',
    category: 'Categoria',
    description: 'Descrição do projeto',
    link: 'https://seu-projeto.com',
    image: 'URL_DA_IMAGEM'
  },
  // ... mais projetos
];
```

### Informações da Empresa

Edite `client/src/components/Header.tsx` e `client/src/components/Footer.tsx` para atualizar:
- Nome da empresa
- Links de redes sociais
- Endereço
- Telefone

## 🔄 Fazer Atualizações

Após fazer alterações no código:

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

O Netlify detectará as mudanças automaticamente e fará o deploy novamente.

## 🎨 Customizações Adicionais

### Cores

Edite `client/src/index.css` para mudar as cores:

```css
:root {
  --primary: #10B981; /* Cor verde principal */
  /* ... outras cores */
}
```

### Tipografia

Edite `client/index.html` para mudar as fontes do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=NOVA_FONTE:wght@400;700&display=swap" rel="stylesheet" />
```

## ✅ Checklist Pré-Launch

- [ ] Informações de contato atualizadas
- [ ] Projetos do portfólio adicionados com links corretos
- [ ] Redes sociais configuradas
- [ ] Domínio customizado configurado (opcional)
- [ ] SSL/HTTPS habilitado (automático na Netlify)
- [ ] Testado em mobile e desktop
- [ ] Formulário de contato testado

## 📞 Suporte

Para dúvidas sobre Netlify:
- Documentação: https://docs.netlify.com
- Status: https://www.netlify.com/status

Para dúvidas sobre o código:
- Consulte a documentação do React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

---

**Pronto para o sucesso! 🚀**
