# Revisão antes da publicação

- [ ] Aprovar os textos institucionais com os proprietários.
- [ ] Confirmar nome da ONG, atuação e destinação dos recursos.
- [ ] Inserir endereço, horários e contatos oficiais confirmados.
- [ ] Confirmar cardápio e respectivas imagens.
- [ ] Revisar as quatro páginas em computador e celular.
- [ ] Testar abertura e fechamento do menu móvel, links, botão voltar e perguntas expansíveis.
- [ ] Conferir navegação por teclado e foco visível.
- [ ] Confirmar permissões de uso da logo e da fotografia.
- [ ] Escolher hospedagem e domínio antes da publicação.

## Verificação de desenvolvimento

Execute `npm ci` e `npm run build`. O GitHub Actions repete a compilação a cada envio ou pull request. Não há teste automatizado de interface nesta versão.

## Dependências — 17/11/2026

A compilação local foi aprovada. A auditoria npm apontou quatro entradas de severidade alta na cadeia de dependências de desenvolvimento do Vite, originadas em `picomatch` (GHSA-fc5q-39xc-vjpf). A correção automática sugeria retroceder o Vite; esse retrocesso não foi aplicado. Reavaliar a atualização compatível antes da publicação. As dependências e o lockfile foram preservados.
