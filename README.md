# Altum Sistemas - Portfólio Profissional

Portfólio moderno e elegante para a **Altum Sistemas**, especializada em padronização de sites e otimização Google Meu Negócio.

## 🎨 Design

- **Paleta**: Verde (#10B981), Branco, Preto
- **Tipografia**: Playfair Display (títulos), Lato (corpo)
- **Estilo**: Elegância Premium com Gradientes Sutis
- **Responsivo**: Totalmente adaptado para mobile, tablet e desktop

## 📦 Tecnologias

- **React 19** - Framework UI
- **Vite** - Build tool moderno
- **Tailwind CSS 4** - Estilização
- **TypeScript** - Type safety
- **Lucide React** - Ícones

## 🚀 Início Rápido

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir em http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
pnpm build

# Testar build localmente
pnpm preview
```

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx     # Navegação
│   │   ├── Hero.tsx       # Seção principal
│   │   ├── Services.tsx   # Serviços
│   │   ├── Portfolio.tsx  # Projetos
│   │   ├── Contact.tsx    # Formulário de contato
│   │   └── Footer.tsx     # Rodapé
│   ├── pages/
│   │   └── Home.tsx       # Página principal
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── public/                # Arquivos estáticos
└── index.html             # HTML base
```

## 🎯 Seções do Site

### 1. **Header**
- Navegação responsiva
- Logo da empresa
- Botão de orçamento
- Menu mobile

### 2. **Hero**
- Headline impactante
- Benefícios principais
- Call-to-action
- Imagem de background premium

### 3. **Serviços**
- Padronização de Sites
- Google Meu Negócio
- Performance Web
- Consultoria Digital

### 4. **Portfólio**
- Showcase de projetos
- Links para sites desenvolvidos
- Categorias de trabalho
- Hover effects elegantes

### 5. **Contato**
- Formulário de contato
- Informações de contato
- Mapa de localização (pronto para integração)

### 6. **Footer**
- Links rápidos
- Redes sociais
- Informações legais

## 🎨 Customização

### Cores

Edite `client/src/index.css`:

```css
:root {
  --primary: #10B981;           /* Verde principal */
  --primary-foreground: #F0FDF4; /* Branco/claro */
  /* ... */
}
```

### Conteúdo

- **Header**: `client/src/components/Header.tsx`
- **Serviços**: `client/src/components/Services.tsx`
- **Projetos**: `client/src/components/Portfolio.tsx`
- **Contato**: `client/src/components/Contact.tsx`

### Imagens

As imagens estão hospedadas em CDN. Para adicionar novas:

1. Prepare a imagem (recomendado: 1920x1080px)
2. Faça upload para seu CDN preferido
3. Substitua a URL no componente correspondente

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Otimizado para Core Web Vitals
- Imagens em WebP com fallback
- CSS crítico inline
- JavaScript lazy-loaded
- Build size: ~580KB (gzip: ~167KB)

## 🚀 Deploy

### Netlify (Recomendado)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Ou siga o guia completo em `NETLIFY_DEPLOY.md`

### Outras Plataformas

- **Vercel**: `vercel deploy`
- **GitHub Pages**: Configure em Settings → Pages
- **Railway**: Conecte seu repositório GitHub

## 📊 SEO

O site inclui:

- Meta tags otimizadas
- Estrutura semântica
- URLs amigáveis
- Sitemap pronto
- Open Graph tags

## 🔐 Segurança

- HTTPS automático (Netlify)
- Headers de segurança configurados
- Sem dependências vulneráveis
- Validação de formulários

## 📝 Licença

Este projeto é propriedade da Altum Sistemas.

## 🤝 Suporte

Para dúvidas ou sugestões:
- Email: contatoaltumsistmas@gmail.com
- Telefone: (11) 99999-9999

---

**Desenvolvido com ❤️ usando React, Vite e Tailwind CSS**
