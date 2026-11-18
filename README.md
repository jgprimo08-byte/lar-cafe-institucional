# Lar Café — Site institucional

Site responsivo em React para o projeto acadêmico A2, com Início, Nossa História, Nossos Cafés e Contato. A navegação usa URLs com hash e funciona em hospedagem estática.

## Executar no computador

Requisitos: Node.js 22 ou superior e npm.

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O resultado da compilação fica em `dist/`. Não é necessário configurar variáveis de ambiente.

## Organização

```text
public/images/       Logo original e fotografia real
src/components/      Elementos reutilizáveis da interface
src/pages/           As quatro páginas institucionais
src/data/            Itens da navegação
src/styles/          Estilos globais e regras responsivas
src/App.jsx          Estrutura do site e navegação
src/main.jsx         Inicialização do React
docs/                Briefing, escopo e checklist de revisão
.github/workflows/   Verificação e publicação automática
.figma/make/         Configuração preservada da importação no Make
```

## Design e conteúdo

- [Figma Make](https://www.figma.com/make/2x4rjsZQCuexLD5xL7pb9g)
- [Protótipo Design de referência](https://www.figma.com/design/BlgDZW75iETwzXvpu8PzJY)
- Paleta: marrom `#6F4E37`, verde `#2F4F3A`, off-white `#F9F7F2` e bege `#E8DCCB`.
- Logo e fotografia originais preservadas. Os arquivos de imagem não foram recriados.
- A origem ligada à ONG e aos refugiados está sinalizada para aprovação dos proprietários.
- Endereço, horários, contatos e cardápio ainda aguardam confirmação.

## Escopo e publicação

Esta versão é institucional e não recebe pedidos, pagamentos ou mensagens. O e-commerce está apenas planejado para uma etapa futura da A2. Consulte [briefing e escopo](docs/briefing-e-escopo.md) e [checklist de revisão](docs/checklist.md).

O fluxo `Verificar projeto` confere a compilação. O fluxo `Publicar no GitHub Pages` publica a pasta `dist/` a cada envio para `main` ou por execução manual. O Pages está habilitado com a origem **GitHub Actions** nas configurações do repositório.

Endereço do site: [Lar Café](https://jgprimo08-byte.github.io/lar-cafe-institucional/). O código usa caminhos relativos e navegação por hash, compatíveis com o endereço de projeto `/lar-cafe-institucional/`. A publicação mantém as sinalizações de conteúdo em validação.

## Imagens e permissões

Marca, logo, fotografia e textos não recebem licença de uso irrestrito por estarem neste repositório. Confirme as permissões com os responsáveis antes de reutilizar ou distribuir esses materiais.
