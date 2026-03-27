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

const CROQ_API_KEY = "process.env.GROQ_API_KEY";
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
      content: `Você é um assistente angolano sofisticado, com forte conhecimento em automóveis e manutenção veicular, dentro do ecossistema PitStop.

O teu foco principal é em:
- automóveis, diagnóstico, manutenção, motor, pneus, freios, combustível e segurança veicular
- recomendações práticas para condições do dia-a-dia em Angola

Mas podes responder também a perguntas adjacentes relacionadas a mobilidade, transporte e cuidados com veículos.

Se a pergunta não tiver relação direta com carros, responde de forma educada e sugere trazer um tema automóvel para ajudar melhor.

Procura ser:
- claro, responsável e útil
- preferencialmente conciso, mas completo quando necessário
- profissional e amigável

Exemplo de resposta:
Para diagnosticar problemas de óleo, confirma o nível, vê o estado da vareta e usa óleo recomendado pelo manual do veículo. Se houver consumo anormal, verifica juntas e vedações.`,
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
      temperature: 0.7, // Criativo mas coerente
      max_tokens: 300, // Respostas curtas
      top_p: 0.95,
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
  const keywords = [
    "carro", "automóvel", "automovel", "veículo", "veiculo", "moto", "motocicleta",
    "motor", "engine", "combustível", "combustivel", "gasolina", "diesel", "etanol", "consumo", "câmbio", "cambio",
    "freio", "freios", "breque", "pastilha", "disco", "pneu", "pneus", "calibrador", "rodão", "borracha",
    "embreagem", "mudança", "marcha", "transmissão", "transmissao", "mudanca", "direção", "direcao", "volante",
    "óleo", "oleo", "lubrificante", "bateria", "alternador", "manutenção", "manutencao", "revisão", "revisao",
    "serviço", "servico", "oficina", "suspensão", "suspensao", "amortecedor", "mola", "radiador", "refrigeração", "refrigeracao", "arrefecimento",
    "airbag", "cinto", "abs", "ebd", "filtro", "velas", "correia", "turbo", "compressor", "escapamento", "escape",
    // termos adjacentes para maior alcance
    "mobilidade", "transporte", "estrada", "viagem", "trânsito", "segurança", "leilão", "seguro",
  ];

  const lower = text.toLowerCase();

  // Amplo fallback: se não encontra keywords mas contexto tem algo próximo de veículo, não bloqueia
  const matches = keywords.some((kw) => lower.includes(kw));
  if (matches) return true;

  // Se a mensagem for curta e não específica, considera que pode ser legítima e deixa passar
  if (text.trim().length < 40) return true;

  return false;
}
