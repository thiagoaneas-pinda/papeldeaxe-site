export const whatsappBase = "https://wa.me/5512991048292";

export const navItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" }
] as const;

export const heroNotes = [
  {
    title: "Personalizacao sob medida",
    text: "Nome, casa, orixa, cores, datas e proposta visual para cada encomenda."
  },
  {
    title: "Tiragens especiais",
    text: "Producao afetiva, cuidadosa e com percepcao boutique em cada detalhe."
  },
  {
    title: "Atendimento acolhedor",
    text: "Alinhamento direto pelo WhatsApp para prazo, acabamento e personalizacao."
  }
] as const;

export const valuePills = [
  {
    title: "Visual delicado",
    text: "Design afetivo com presenca de marca e acabamento caprichado."
  },
  {
    title: "Processo simples",
    text: "Escolha, personalize e alinhe tudo com clareza pelo WhatsApp."
  },
  {
    title: "Pecas com significado",
    text: "Produtos criados para acolher, organizar e presentear com axe."
  }
] as const;

export const products = [
  {
    name: "Caderno de firmeza",
    tag: "Umbanda / Candomble",
    badge: "Mais pedido",
    description:
      "Um caderno pensado para registrar firmezas, obrigacoes, estudos e orientacoes com mais beleza e organizacao.",
    price: "R$ 79,90",
    asset: "/imagens/MARCA D AGUAAtivo 3.png",
    message:
      "Oi Papel de Axe! Quero saber mais sobre o Caderno de Firmeza e as opcoes de personalizacao.",
    features: [
      "Capa com nome, casa ou orixa",
      "Miolo pensado para uso recorrente",
      "Otimo para registros pessoais e da casa"
    ]
  },
  {
    name: "Planner de gira",
    tag: "Organizacao",
    badge: "Personalizavel",
    description:
      "Planejamento delicado para acompanhar giras, escalas, estudos e compromissos com clareza no dia a dia.",
    price: "R$ 99,90",
    asset: "/imagens/MARCA D AGUAAtivo 12.png",
    message:
      "Oi Papel de Axe! Quero saber mais sobre o Planner de Gira e as opcoes de personalizacao.",
    features: [
      "Visao mensal e semanal",
      "Espaco para anotacoes e observacoes",
      "Ideal para rotina pessoal ou da casa"
    ]
  },
  {
    name: "Kit presente de axe",
    tag: "Presente afetivo",
    badge: "Sob medida",
    description:
      "Uma composicao especial para presentear com intencao, reunindo papelaria personalizada e acabamento caprichado.",
    price: "R$ 149,90",
    asset: "/imagens/MARCA D AGUAAtivo 2.png",
    message:
      "Oi Papel de Axe! Quero montar um Kit Presente de Axe personalizado.",
    features: [
      "Montagem personalizada para a ocasiao",
      "Combinacao de itens com identidade visual",
      "Perfeito para surpreender com carinho"
    ]
  },
  {
    name: "Bloco do terreiro",
    tag: "Dia a dia",
    badge: "Uso coletivo",
    description:
      "Blocos personalizados para recados, listas, atendimentos e anotacoes rapidas com identidade da casa.",
    price: "R$ 39,90",
    asset: "/imagens/MARCA D AGUAAtivo 7.png",
    message:
      "Oi Papel de Axe! Quero saber mais sobre o Bloco do Terreiro personalizado.",
    features: [
      "Pratico para uso cotidiano",
      "Pode levar nome da casa ou identidade visual",
      "Bom complemento para kits e encomendas"
    ]
  }
] as const;

export const steps = [
  {
    number: "1",
    title: "Escolha o ponto de partida",
    text: "Veja as colecoes e nos chame no WhatsApp com a referencia que mais combina com voce."
  },
  {
    number: "2",
    title: "Conte como imagina sua peca",
    text: "Ajustamos nome, casa, orixa, cores, datas e detalhes visuais para deixar o produto com a sua identidade."
  },
  {
    number: "3",
    title: "Receba prazo, valores e confirmacao",
    text: "Voce recebe orientacao sobre producao, pagamento e alinhamento final antes de seguir."
  }
] as const;

export const aboutFeatures = [
  "Cadernos, planners e kits com identidade autoral",
  "Pedidos personalizados para uso pessoal ou presente",
  "Atendimento proximo para alinhar visual, mensagem e acabamento"
] as const;

export const contactDetails = [
  { label: "WhatsApp", value: "(12) 99104-8292" },
  { label: "Instagram", value: "@papeldeaxe" },
  { label: "Horario", value: "Comercial, horario de Sao Paulo" }
] as const;

export function buildWhatsAppUrl(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}
