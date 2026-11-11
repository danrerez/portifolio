export const perfil = {
  nome: 'Daniel Cardoso Leão',
  papel: 'Sistemas de Informação | Marketing, Desenvolvimento e IA',
  sobre: [
    'Tenho 21 anos e curso o 8º semestre de Sistemas de Informação na Universidade de Mogi das Cruzes (UMC). Sou responsável por toda a área de marketing, desenvolvimento e inteligência artificial da Dalsun Energia Solar.',
    'Gosto de desenvolver interfaces com foco em UI/UX, criando soluções que melhorem a experiência e a navegação do usuário. No trabalho, transformo demandas de campanhas, sites e relatórios em sistemas usados no dia a dia da empresa, e aplico IA para automatizar processos do time comercial.',
  ],
  local: 'Arujá, São Paulo',
}

export const experiencias = [
  {
    periodo: 'Jul 2023 - Atual',
    titulo: 'Marketing, Desenvolvimento e IA',
    local: 'Dalsun Energia Solar',
    descricao:
      'Gestão de campanhas no Meta Ads e Google Ads, produção de conteúdo para redes sociais, desenvolvimento de sites, landing pages e sistemas internos, relatórios em Power BI e automações com inteligência artificial.',
  },
  {
    periodo: 'Jan 2023 - Jul 2023',
    titulo: 'Auxiliar de Escritório',
    local: 'Dalsun Energia Solar',
    descricao:
      'Organização de documentos, atendimento a clientes por telefone e e-mail, controle de planilhas e apoio às rotinas administrativas.',
  },
]

export const formacao = [
  {
    periodo: 'Jan 2023 - Dez 2026',
    titulo: 'Bacharelado em Sistemas de Informação',
    local: 'Universidade de Mogi das Cruzes (UMC)',
    descricao: 'Cursando o 8º semestre.',
  },
  {
    periodo: 'Jan 2020 - Dez 2022',
    titulo: 'Ensino Médio Integrado ao Técnico em Administração',
    local: 'ETEC Arujá, Profª Luzia Maria Machado',
    descricao: 'Inglês intermediário.',
  },
]

// origem: 'umc' = visto no curso de Sistemas de Informação da UMC
//         'trabalho' = aprendido e usado na Dalsun
export const stacks = [
  { nome: 'Lógica e Algoritmos', area: 'Fundamentos', origem: 'umc' },
  { nome: 'Estrutura de Dados', area: 'Fundamentos', origem: 'umc' },
  { nome: 'Java (POO)', area: 'Linguagens', origem: 'umc' },
  { nome: 'C', area: 'Linguagens', origem: 'umc' },
  { nome: 'Python', area: 'Linguagens', origem: 'umc' },
  { nome: 'JavaScript', area: 'Linguagens', origem: 'umc' },
  { nome: 'TypeScript', area: 'Linguagens', origem: 'trabalho' },
  { nome: 'HTML e CSS', area: 'Web e UI/UX', origem: 'umc' },
  { nome: 'React', area: 'Web e UI/UX', origem: 'umc' },
  { nome: 'Figma', area: 'Web e UI/UX', origem: 'umc' },
  { nome: 'Next.js', area: 'Web e UI/UX', origem: 'trabalho' },
  { nome: 'Tailwind CSS', area: 'Web e UI/UX', origem: 'trabalho' },
  { nome: 'Node.js', area: 'Web e UI/UX', origem: 'trabalho' },
  { nome: 'SQL', area: 'Dados', origem: 'umc' },
  { nome: 'Modelagem (MER/DER)', area: 'Dados', origem: 'umc' },
  { nome: 'MySQL', area: 'Dados', origem: 'umc' },
  { nome: 'PostgreSQL', area: 'Dados', origem: 'trabalho' },
  { nome: 'Prisma ORM', area: 'Dados', origem: 'trabalho' },
  { nome: 'Supabase', area: 'Dados', origem: 'trabalho' },
  { nome: 'Power BI', area: 'Dados', origem: 'trabalho' },
  { nome: 'Engenharia de Software', area: 'Engenharia', origem: 'umc' },
  { nome: 'UML e Requisitos', area: 'Engenharia', origem: 'umc' },
  { nome: 'Scrum e Kanban', area: 'Engenharia', origem: 'umc' },
  { nome: 'Gestão de Projetos', area: 'Engenharia', origem: 'umc' },
  { nome: 'Git e GitHub', area: 'Engenharia', origem: 'umc' },
  { nome: 'Redes de Computadores', area: 'Infra', origem: 'umc' },
  { nome: 'Sistemas Operacionais', area: 'Infra', origem: 'umc' },
  { nome: 'Vercel', area: 'Infra', origem: 'trabalho' },
  { nome: 'Inteligência Artificial', area: 'IA e Marketing', origem: 'umc' },
  { nome: 'Claude e LLMs', area: 'IA e Marketing', origem: 'trabalho' },
  { nome: 'Meta Ads', area: 'IA e Marketing', origem: 'trabalho' },
  { nome: 'Google Ads e GA4', area: 'IA e Marketing', origem: 'trabalho' },
]

export const projetos = [
  {
    titulo: 'Portal de Indicações Dalsun',
    url: 'projeto privado | dalsun',
    descricao:
      'Portal onde clientes indicam novos clientes, acompanham o status de cada indicação e disputam um ranking com prêmios. Login com verificação em duas etapas, e-mails transacionais e integração com o CRM do time comercial.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'RD Station API'],
  },
  {
    titulo: 'Sistemas internos da Dalsun',
    url: 'projeto privado | dalsun',
    descricao:
      'Ferramentas usadas no dia a dia da empresa: CRM, gestão de tarefas da equipe, dashboard de indicadores e painéis de apoio às vendas.',
    tags: ['React', 'Next.js', 'Supabase', 'Vercel'],
  },
  {
    titulo: 'Sites, landing pages e simulador solar',
    url: 'projeto privado | dalsun',
    descricao:
      'Site institucional, páginas de campanha e um simulador que estima a economia com energia solar a partir da conta de luz, conectados ao tráfego pago e ao CRM.',
    tags: ['React', 'UI/UX', 'Meta Ads', 'Google Ads'],
  },
  {
    titulo: 'Relatórios e automações com IA',
    url: 'projeto privado | dalsun',
    descricao:
      'Relatórios em Power BI para acompanhar campanhas e vendas, e automações com LLMs para gerar conteúdo, analisar contas de anúncio e agilizar tarefas repetitivas.',
    tags: ['Power BI', 'Claude', 'Python', 'GA4'],
  },
  {
    titulo: 'OceanTech',
    url: 'github.com/danrerez/oceantech',
    link: 'https://github.com/danrerez/oceantech',
    descricao:
      'Site institucional desenvolvido em HTML e CSS, com prototipagem realizada no Figma, unindo identidade visual e boa experiência de navegação.',
    tags: ['HTML', 'CSS', 'Figma'],
  },
]

export const contatos = [
  {
    rotulo: 'GitHub',
    texto: 'github.com/danrerez',
    href: 'https://github.com/danrerez',
  },
  {
    rotulo: 'LinkedIn',
    texto: 'linkedin.com/in/daniel-cardoso-leão',
    href: 'https://www.linkedin.com/in/daniel-cardoso-le%C3%A3o-8a197b212/',
  },
]
