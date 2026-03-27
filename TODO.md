# TODO: Adaptar Chat para API Croq

Status: Planning

## Passos:

- [ ] 1. Confirmar detalhes da API Croq com usuário (endpoint, auth, format request/response)
- [ ] 2. Criar service `src/srcreens/chat/services/croqApi.ts` com função callCroqAPI
- [ ] 3. Editar `src/srcreens/chat/chat.tsx`: 
  - Renomear callGemini -> callCroqAPI
  - Importar e usar service
  - Atualizar comentários e mensagens para Croq
- [ ] 4. Testar: expo start, enviar mensagens automotivas, verificar logs/response
- [ ] 5. Completar task

Próximo: Aguardar detalhes API e aprovação.
