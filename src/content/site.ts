export const whatsappBase = "https://wa.me/5512992095661";

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
      "Um caderno pensado para registrar firmezas, oferendas, banhos, defumação, padês, com mais beleza e organização.",
    price: "R$ 79,90",
    assets: [
      "/imagens/caderno-firmeza-1.jpeg",
      "/imagens/caderno-firmeza-2.jpeg",
      "/imagens/caderno-firmeza-3.jpeg"
    ],
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Caderno de Firmeza e as opções de personalização.",
    features: [
      "Capa com seu nome, nome da sua casa, orixás, guias e entidades.",
      "Miolo pensando para uso diário, com visão ampla e simples.",
      "Ótimo para registrar cada detalhes das suas obrigações."
    ]
  },
  {
    name: "Caderno Personalizado",
    tag: "Organização",
    badge: "Personalizável",
    description:
      "Um caderno pensando para colocar todos os estudos, rezos, mandingas, orações, benzimentos, e tudo mais que estiver relacionado com sua espiritualidade.",
    price: "R$ 59,90",
    assets: [
      "/imagens/caderno-personalizado-1.jpeg",
      "/imagens/caderno-personalizado-2.jpeg",
      "/imagens/caderno-personalizado-3.jpeg",
      "/imagens/caderno-personalizado-4.jpeg",
      "/imagens/caderno-personalizado-5.jpeg"
    ],
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Caderno Personalizado e as opções de personalização.",
    features: [
      "Capa com seu nome, nome de sua casa, orixá, guias, entidades, com imagens que fazem sentido para o seu Axé.",
      "Miolo personalizável.",
      "Ótimo para registros de tudo que a espiritualidade te intui e comunica."
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
    name: "Bloco de Anotações (8x11cm)",
    tag: "Dia a dia",
    badge: "Uso coletivo",
    description:
      "Blocos pequenos e práticos para levar na bolsa, deixar na cabeceira de cama, para anotações rápidas e com propósito.",
    price: "R$ 14,90",
    asset: "/imagens/MARCA D AGUAAtivo 7.png",
    message:
      "Oi Papel de Axé! Quero saber mais sobre o Bloco de Anotações personalizado.",
    features: [
      "Capa totalmente personalizável, com nome de seus guias, orixás, imagens, e muito mais!",
      "Miolo em folhas sem pauta, podendo também ser utilizado para desenhos e outros fundamentos.",
      "Perfeito para lembrancinhas de batizado, casamento, saídas de santo e eventos em geral! "
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
  { label: "WhatsApp", value: "(12) 99209-5661" },
  { label: "Instagram", value: "@papeldeaxe" },
  {/* label: "Horário", value: "Comercial, horário de São Paulo" */}
] as const;

export function buildWhatsAppUrl(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}