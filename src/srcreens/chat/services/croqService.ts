// Tipos da mensagem
type Role = "user" | "assistant" | "system";

interface Message {
  role: Role;
  content: string;
}

interface CroqResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

const CROQ_API_KEY = "YOUR_CROQ_API_KEY_HERE";
const CROQ_ENDPOINT = "";

/**
 * Chama a API do Groq com contexto de automóvel
 * @param userMessage - Mensagem do usuário
 * @param conversationHistory - Histórico anterior (para contexto)
 * @returns Resposta da IA
 */
export async function callCroqAPI(
  userMessage: string,
  conversationHistory: Array<{ role: Role; content: string }> = []
): Promise<string> {
  if (!CROQ_API_KEY) {
    return "Chave da API não configurada!";
  }

  try {
    // Mensagem do sistema: define o comportamento da IA
    const systemMessage: Message = {
      role: "system",
      content: `Você é um assistente inteligente especializado em automóveis e manutenção veicular, integrado ao app PitStop de Angola.

Sua expertise abrange:
- Diagnóstico e manutenção de veículos (motor, freios, suspensão, transmissão, elétrica, etc.)
- Dicas práticas de condução segura e econômica
- Explicações sobre componentes automotivos e funcionamento
- Recomendações para cuidados diários com o carro
- Informações sobre legislação de trânsito angolana
- Soluções para problemas comuns de mobilidade urbana

Sempre forneça respostas curtas, diretas e práticas. Foque em soluções acionáveis e evite respostas longas ou genéricas. E considere o contexto local de Angola para suas respostas.

Se a pergunta não for sobre automóveis, responda de forma breve e redirecione educadamente para temas relacionados a veículos.

Exemplos de respostas:
- "Para calibrar pneus, use uma bomba calibradora e mantenha 32-35 PSI. Verifique mensalmente."
- "Ruído nos freios indica desgaste das pastilhas. Leve a uma oficina para inspeção."
- "Consumo alto de combustível pode ser por pneus murchos ou filtro de ar sujo. Verifique primeiro os pneus."`,
    };

    // Constrói o histórico de conversa
    const messages: Message[] = [
      systemMessage,
      ...conversationHistory,
      { role: "user", content: userMessage },
    ];

    // Dados para enviar à API
    const payload = {
      model: "llama-3.3-70b-versatile", // ✅ Modelo PRODUCTION ativo do Groq (confirmado na documentação oficial)
      messages,
      temperature: 0.5, // Menos criativo para respostas mais diretas
      max_tokens: 200, // Respostas ainda mais curtas
      top_p: 0.9,
    };

    // Faz a requesição
    const response = await fetch(CROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CROQ_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Erro Croq (${response.status}):`, errorText);
      
      if (response.status === 401) {
        return "Erro de autenticação. Verifique a chave da API.";
      }
      if (response.status === 429) {
        return "Limite de requisições atingido. Aguarde um momento...";
      }
      
      return `Erro da API: ${response.status}`;
    }

    const data: CroqResponse = await response.json();

    // Extrai a resposta
    let botResponse = data.choices?.[0]?.message?.content;
    if (!botResponse) {
      return "Não consegui gerar uma resposta. Tente novamente!";
    }

    // Remove emojis da resposta (apenas em caso de fallback)
    botResponse = botResponse.replace(/[\p{Emoji}]/gu, "").trim();
    
    return botResponse;
  } catch (error: any) {
    console.error("Erro ao conectar ao Croq:", error);
    return `Erro de conexão: ${error?.message || "Verifique sua conexão"}`;
  }
}

/**
 * Valida se a pergunta é sobre automóveis
 */
export function isCarRelated(text: string): boolean {
  // Removido validação por keywords para dar mais liberdade à IA
  // Agora a IA decide sozinha se responde ou não baseado no prompt
  return true;
}
