export const whatsappBase = "https://wa.me/5512991048292";

export const navItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" }
] as const;

export const heroNotes = [
  {
    title: "Personalização sob medida",
    text: "Nome, casa, orixá, cores, datas e proposta visual para cada encomenda."
  },
  {
    title: "Tiragens especiais",
    text: "Produção afetiva, cuidadosa e com percepção boutique em cada detalhe."
  },
  {
    title: "Atendimento acolhedor",
    text: "Alinhamento direto pelo WhatsApp para prazos, acabamento e personalização."
  }
] as const;

export const valuePills = [
  {
    title: "Visual delicado",
    text: "Design afetivo, com presença de marca e acabamento caprichado."
  },
  {
    title: "Processo simples",
    text: "Escolha, personalize e alinhe tudo com clareza pelo WhatsApp."
  },
  {
    title: "Peças com significado",
    text: "Produtos criados para acolher, organizar e presentear com axé."
  }
] as const;

export const products = [
  {
    name: "Caderno de firmeza",
    tag: "Umbanda / Candomblé",
    badge: "Mais pedido",
    description:
      "Um caderno pensado para registrar firmezas, obrigações, estudos e orientações com mais beleza e organização.",
    price: "R$ 79,90",
    asset: "/imagens/MARCA D AGUAAtivo 3.png",
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Caderno de Firmeza e as opções de personalização.",
    features: [
      "Capa com nome, casa ou orixá",
      "Miolo pensado para uso recorrente",
      "Ótimo para registros pessoais e da casa"
    ]
  },
  {
    name: "Planner de gira",
    tag: "Organização",
    badge: "Personalizável",
    description:
      "Planejamento delicado para acompanhar giras, escalas, estudos e compromissos com clareza no dia a dia.",
    price: "R$ 99,90",
    asset: "/imagens/MARCA D AGUAAtivo 12.png",
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Planner de Gira e as opções de personalização.",
    features: [
      "Visão mensal e semanal",
      "Espaço para anotações e observações",
      "Ideal para rotina pessoal ou da casa"
    ]
  },
  {
    name: "Kit presente de axé",
    tag: "Presente afetivo",
    badge: "Sob medida",
    description:
      "Uma composição especial para presentear com intenção, reunindo papelaria personalizada e acabamento caprichado.",
    price: "R$ 149,90",
    asset: "/imagens/MARCA D AGUAAtivo 2.png",
    message:
      "Oi Papel de Axé! Quero montar um Kit Presente de Axé personalizado.",
    features: [
      "Montagem personalizada para a ocasião",
      "Combinação de itens com identidade visual",
      "Perfeito para surpreender com carinho"
    ]
  },
  {
    name: "Bloco do terreiro",
    tag: "Dia a dia",
    badge: "Uso coletivo",
    description:
      "Blocos personalizados para recados, listas, atendimentos e anotações rápidas com identidade da casa.",
    price: "R$ 39,90",
    asset: "/imagens/MARCA D AGUAAtivo 7.png",
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Bloco do Terreiro personalizado.",
    features: [
      "Prático para uso cotidiano",
      "Pode levar nome da casa ou identidade visual",
      "Bom complemento para kits e encomendas"
    ]
  }
] as const;

export const steps = [
  {
    number: "1",
    title: "Escolha o ponto de partida",
    text: "Veja as coleções e nos chame no WhatsApp com a referência que mais combina com você."
  },
  {
    number: "2",
    title: "Conte como imagina sua peça",
    text: "Ajustamos nome, casa, orixá, cores, datas e detalhes visuais para deixar o produto com a sua identidade."
  },
  {
    number: "3",
    title: "Receba prazo, valores e confirmação",
    text: "Você recebe orientações sobre produção, pagamento e alinhamento final antes de seguir."
  }
] as const;

export const aboutFeatures = [
  "Cadernos, planners e kits com identidade autoral",
  "Pedidos personalizados para uso pessoal ou presente",
  "Atendimento próximo para alinhar visual, mensagem e acabamento"
] as const;

export const contactDetails = [
  { label: "WhatsApp", value: "(12) 99104-8292" },
  { label: "Instagram", value: "@papeldeaxe" },
  { label: "Horário", value: "Comercial, horário de São Paulo" }
] as const;

export function buildWhatsAppUrl(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}