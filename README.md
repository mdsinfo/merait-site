# Site MERAIT

Site corporativo em Next.js 15, React, TypeScript e Tailwind CSS.

## Rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Copie `.env.example` para `.env.local`.

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número em formato internacional, só dígitos.
- `NEXT_PUBLIC_HERO_VIDEO`: caminho ou URL do vídeo institucional. Vazio mantém o fundo animado, mais leve para performance.
- `NEXT_PUBLIC_GA_ID` ou `NEXT_PUBLIC_GTM_ID`: um dos dois. Se os dois existirem, o Tag Manager prevalece.
- `NEXT_PUBLIC_GSC_VERIFICATION`: código da meta tag do Search Console.
- `CONTACT_WEBHOOK_URL`: endpoint que recebe os leads em JSON. Sem essa URL, o formulário valida os dados e entrega a conversa no WhatsApp.

## Logos de clientes

Os logos públicos são placeholders. Para publicar uma marca autorizada, inclua o arquivo em `public/clients` e preencha `logoSrc` em `src/lib/company.ts`.
