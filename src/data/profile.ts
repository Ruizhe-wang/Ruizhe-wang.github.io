export type Locale = 'en' | 'zh';
export type Page = 'home' | 'research' | 'publications' | 'cv' | 'contact';
export const locales: Locale[] = ['en', 'zh'];
export const pages: Page[] = ['home', 'research', 'publications', 'cv', 'contact'];
export const route = (lang: Locale, page: Page = 'home') => `/${lang}/${page === 'home' ? '' : `${page}/`}`;

// Identity, current role, interests, availability and asset reuse confirmed by
// Ruizhe on 2026-10-13. Education and skills come from the supplied CV.
export const profile = {
  name: 'Ruizhe Wang',
  chineseName: '王睿哲',
  email: 'ruizhewang7627@outlook.com',
  github: 'https://github.com/Ruizhe-wang',
  portrait: '/assets/images/bio-photo.jpg',
  wechatQR: '/assets/images/wechat-qr.jpg',
  cv: '/assets/cv.pdf',
  dmtmePaper: 'https://arxiv.org/abs/2410.19504',
  role: { en: 'Research intern at Tsientang Institute for Advanced Study (TIAS)', zh: '钱塘高等研究院（TIAS）研究实习生' },
  availability: { en: 'Looking for PhD opportunities', zh: '正在寻找 PhD 研究机会' },
  sidebarBio: {
    en: "I completed my master's in Quantitative Biology and Bioinformatics at ANU. My interests include AI, machine learning, AI for Science, and agentic frameworks. I look forward to exploring new research questions and methods.",
    zh: '在澳大利亚国立大学完成计量生物学和生物信息学硕士。对 AI、机器学习、AI for Science 与 Agentic 框架感兴趣，也期待接触新的研究问题与方法。',
  },
  bio: {
    en: [
      "Hi, I'm Ruizhe Wang, currently a research intern at TIAS. I hope to develop a deeper understanding of AI through research, while exploring the questions I would like to pursue over the long term.",
      "I studied Biological Science at Shandong University and earned an MSc in Quantitative Biology and Bioinformatics from the Australian National University. This background introduced me to both life sciences and computational methods, providing a starting point for further study in AI and machine learning.",
      "My interests include AI, machine learning, AI for Science, manifold learning, and agentic frameworks. These interests continue to develop. I hope to stay open to different questions and methods, and to learn through opportunities that bring disciplines together.",
      "I'm curious about AI's capabilities, its boundaries, and what it may make possible in the future. With agentic frameworks, I'd like to understand how AI can participate in complex tasks, use tools, and respond to feedback, as well as how we can assess its behavior. These are questions I look forward to exploring.",
      "One of my completed projects is DMT-Dens, a manifold visualization method for biological data. The paper and code are linked below. I look forward to gaining more research experience and broadening my understanding through new problems, approaches, and conversations.",
      "I'm currently seeking PhD opportunities where I can continue learning with guidance from supervisors and fellow researchers. I'd be grateful for the opportunity to learn about your research, discuss possible directions, or hear your advice about PhD opportunities.",
    ],
    zh: [
      '你好，我是王睿哲（Ruizhe Wang），目前在钱塘高等研究院（TIAS）做研究实习。我希望通过研究更深入地理解 AI，也在持续探索自己愿意长期投入的问题。',
      '我本科就读于山东大学生物科学专业，之后在澳大利亚国立大学获得计量生物学和生物信息学硕士学位。这段学习经历让我有机会接触生命科学与计算方法，也为进一步学习 AI 和机器学习提供了起点。',
      '我的研究兴趣包括 AI、机器学习、AI for Science、流形学习和 Agentic 框架。这些兴趣还在不断发展，我希望保持开放，在具体问题中学习不同的方法，也接触更多跨学科的研究机会。',
      '我对 AI 的能力、边界和未来可能性抱有好奇。对于 Agentic 框架，我希望了解 AI 如何参与复杂任务、使用工具和接收反馈，以及我们如何理解和评估它的表现。这些都是我期待继续学习和探索的问题。',
      '已完成的研究工作包括 DMT-Dens，一项面向生物数据的流形可视化方法，论文和代码见下方。接下来，我希望继续积累研究经验，在新的问题、方法以及与他人的交流中拓展自己的理解。',
      '目前，我正在寻找博士研究机会，希望在老师和研究团队的指导下继续学习。如果有机会了解您的研究、交流可能的方向，或请教相关的博士机会，我会非常感谢。',
    ],
  },
  interests: [
    { name: { en: 'AI for Science', zh: 'AI for Science' }, description: { en: 'Exploring scientific questions with AI, and how models can work with scientific knowledge, data, and research workflows.', zh: '用 AI 探索科学问题，关注模型与科学知识、数据和研究流程的结合。' } },
    { name: { en: 'Manifold learning', zh: '流形学习' }, description: { en: 'The geometry of data, representation learning, and dimensionality reduction, including their applications across different tasks and domains.', zh: '关注数据的几何结构、表示学习与降维方法，探索它们在不同任务和领域中的应用。' } },
    { name: { en: 'Machine learning', zh: '机器学习' }, description: { en: 'Learning mechanisms, model capabilities, and evaluation, with an interest in effective, reliable, and understandable methods.', zh: '对学习机制、模型能力与评估方法保持兴趣，探索更有效、可靠且可理解的学习方法。' } },
    { name: { en: 'Agentic frameworks', zh: 'Agentic 框架' }, description: { en: 'Planning, tool use, feedback, and collaboration, and the possibilities of agents in research and other complex tasks.', zh: '关注规划、工具使用、反馈与协作机制，探索智能体在研究及其他复杂任务中的可能性。' } },
  ],
  // Master's subject wording was corrected by the owner on 2026-10-13.
  education: [
    { dates: '2023.07 – 2025.07', institution: { en: 'The Australian National University', zh: '澳大利亚国立大学' }, degree: { en: 'Master of Science in Quantitative Biology and Bioinformatics', zh: '计量生物学和生物信息学理学硕士' } },
    { dates: '2020.09 – 2023.06', institution: { en: 'Shandong University', zh: '山东大学' }, degree: { en: 'Bachelor of Biological Science', zh: '生物科学学士' } },
  ],
  // Award names, years, ranks and amount are from the original downloadable CV.
  scholarships: [
    {
      year: '2023',
      name: { en: "Director's Scholarship for Academic Excellence", zh: "学术卓越奖学金（Director's Scholarship for Academic Excellence）" },
      institution: { en: 'The Australian National University', zh: '澳大利亚国立大学' },
      description: { en: 'Ranked in the top 1% of the program; awarded A$15,000.', zh: '项目排名前 1%；奖学金金额 15,000 澳元。' },
    },
    {
      year: '2021',
      name: { en: 'SDU–ANU Joint Science College Scholarship', zh: '山东大学—澳大利亚国立大学联合理学院奖学金' },
      institution: { en: 'Shandong University and Australian National University Joint Science College', zh: '山东大学—澳大利亚国立大学联合理学院' },
      description: { en: 'Ranked in the top 15%.', zh: '排名前 15%。' },
    },
  ],
  skills: ['Python', 'PyTorch', 'Lightning', 'R', 'Git', 'Weights & Biases (W&B)'],
  languages: {
    en: 'Chinese (native); English — IELTS 7.5.',
    zh: '中文（母语）；英语：雅思（IELTS）7.5 分。',
  },
};

// Verified against https://arxiv.org/abs/2608.17571 on 2026-10-13.
// arXiv availability is evidence of a preprint, not journal acceptance.
export const paper = {
  id: 'dmt-dens',
  title: 'DMT-Dens: Density-preserving manifold visualization for biological data',
  authors: ['Ruizhe Wang', 'Yixuan Dong', 'Bolin Yang', 'Bingo Wing-Kuen Ling', 'Fuji Yang', 'Zelin Zang'],
  year: 2026,
  status: { en: 'Preprint', zh: '预印本' },
  // Editorial status supplied by the owner for the CV on 2026-10-14.
  cvStatus: '(with editor)',
  arxiv: 'https://arxiv.org/abs/2608.17571',
  pdf: 'https://arxiv.org/pdf/2608.17571',
  code: 'https://github.com/Ruizhe-wang/DMT-Dens',
  image: '/assets/images/dmt-dens-embeddings.png',
  imageSource: 'https://arxiv.org/html/2608.17571v1',
  description: {
    en: 'A manifold visualization method that aims to preserve local density when mapping high-dimensional biological data into two dimensions.',
    zh: '一种面向高维生物数据的流形可视化方法，旨在将数据映射到二维时保留其局部密度。',
  },
  question: {
    en: 'A two-dimensional plot can change how dense or sparse a population appears. How can we retain this information when we visualize biological data?',
    zh: '一张二维图可能改变我们对数据疏密的判断。可视化生物数据时，怎样尽量保留这些信息？',
  },
  approach: {
    en: 'DMT-Dens combines a learned parametric mapping with manifold and density objectives. The density term aligns local density estimates between the processed input and embedding.',
    zh: 'DMT-Dens 将参数化映射与流形、密度两个目标结合，让处理后输入与低维表示的局部密度估计尽量保持一致。',
  },
  bibtex: `@misc{wang2026dmtdens,
  title = {DMT-Dens: Density-preserving manifold visualization for biological data},
  author = {Ruizhe Wang and Yixuan Dong and Bolin Yang and Bingo Wing-Kuen Ling and Fuji Yang and Zelin Zang},
  year = {2026},
  eprint = {2608.17571},
  archivePrefix = {arXiv},
  primaryClass = {q-bio.QM},
  url = {https://arxiv.org/abs/2608.17571}
}`,
};

export const labels = {
  en: {
    nav: { home: 'Home', research: 'Research', publications: 'Publications', cv: 'CV', contact: 'Contact' },
    skip: 'Skip to content', menu: 'Menu', close: 'Close menu', language: 'Language',
    academic: 'A little about me', hello: "Hi, I'm", name: 'Ruizhe Wang', alternateName: '王睿哲',
    heroLine: 'Exploring structure in complex data.',
    heroBio: "I'm a research intern at TIAS with a background in quantitative biology and bioinformatics. My interests span AI, machine learning, AI for Science, manifold learning, and agentic frameworks, and I'm open to new research questions and methods.",
    viewResearch: 'Explore my research', downloadCV: 'Download CV', meet: 'Contact details',
    about: 'About me',
    interests: 'What I think about', interestsLabel: 'Research interests',
    selected: 'Completed research', allPublications: 'All publications',
    readPaper: 'Read the paper', code: 'Code', paper: 'Paper', pdf: 'PDF',
    figureCaption: 'Figure 3 from DMT-Dens · Wang et al., 2026 · CC BY 4.0',
    researchTitle: 'Questions worth exploring.', researchIntro: "My interests span AI, machine learning, AI for Science, manifold learning, and agentic frameworks. I hope to explore new questions and methods across these areas. DMT-Dens, introduced below, is one of my completed research projects.",
    question: 'The question', approach: 'The approach', resources: 'Explore the work',
    publicationsTitle: 'Publication', publicationsIntro: 'Papers, with links to the work behind them.',
    cite: 'Cite this work', downloadBib: 'Download BibTeX',
    cvTitle: 'A little background.', cvIntro: 'My research experience and education, with a downloadable CV for the details.',
    experience: 'Research experience', present: 'Current', cvPublications: 'Publication', education: 'Education', scholarships: 'Scholarships and awards', skills: 'Tools I work with', languages: 'Languages',
    currentWork: 'Research interests: AI for Science, manifold learning, machine learning, agentic frameworks, and the boundaries of AI capabilities.',
    earlierExperience: 'AI for Science research intern', earlierProject: 'DMTME project',
    earlierWork: 'Computational experiments and data analysis for deep manifold learning.',
    cvCardTitle: 'The full version', cvCardText: 'Download my CV for research experience, education, and skills.', cvOpen: 'Open CV',
    contactTitle: 'PhD opportunities & contact', contactIntro: "I'm seeking PhD opportunities and hope to learn from experienced researchers. My interests span AI, machine learning, AI for Science, and agentic frameworks, and I'm open to exploring new research questions and methods. I'd be grateful for the opportunity to discuss potential PhD openings and learn more about your research.",
    email: 'Email', github: 'GitHub', sendEmail: 'Send an email', githubLink: 'View GitHub profile', copy: 'Copy email', copied: 'Email copied', copyFailed: 'Could not copy automatically. Email: ',
    wechat: 'WeChat', wechatCaption: 'Scan the QR code to add me on WeChat.', wechatAlt: "Ruizhe Wang's WeChat QR code", wechatImageOpen: 'Open the WeChat QR code image',
    contactNote: 'Thank you for taking the time to learn about my work.',
    contactBand: 'Looking for PhD opportunities', contactBandText: "I hope to deepen my learning and research in these areas, and would greatly welcome the opportunity to learn from professors and researchers.",
    footer: 'AI for Science · Manifold learning · Machine learning · Agentic AI',
    notFound: 'This page seems to have wandered off.', backHome: 'Back to home',
  },
  zh: {
    nav: { home: '首页', research: '研究', publications: '论文', cv: '履历', contact: '联系' },
    skip: '跳转到正文', menu: '菜单', close: '关闭菜单', language: '语言',
    academic: '很高兴在这里遇见你', hello: '你好，我是', name: '王睿哲', alternateName: 'Ruizhe Wang',
    heroLine: '探索复杂数据中的结构。',
    heroBio: '目前在钱塘高等研究院（TIAS）做研究实习，具有计量生物学和生物信息学背景。研究兴趣包括 AI、机器学习、AI for Science、流形学习与 Agentic 框架，也期待探索新的问题与方法。',
    viewResearch: '看看我的研究', downloadCV: '下载简历', meet: '联系方式',
    about: '关于我',
    interests: '最近关注的问题', interestsLabel: '研究兴趣',
    selected: '已完成的研究', allPublications: '查看论文',
    readPaper: '阅读论文', code: '代码', paper: '论文', pdf: 'PDF',
    figureCaption: 'DMT-Dens 图 3 · Wang 等，2026 · CC BY 4.0',
    researchTitle: '从问题出发，慢慢探索。', researchIntro: '我的研究兴趣包括 AI、机器学习、AI for Science、流形学习与 Agentic 框架，希望在这些方向之间接触新的问题与方法。下方的 DMT-Dens 是我已完成的一项研究工作。',
    question: '关心的问题', approach: '采用的方法', resources: '进一步了解',
    publicationsTitle: 'Publication', publicationsIntro: '论文，以及相关代码和资料。',
    cite: '引用这项工作', downloadBib: '下载 BibTeX',
    cvTitle: '一路走来的经历。', cvIntro: '研究经历、教育背景，以及一份可以下载的简历。',
    experience: '研究经历', present: '目前', cvPublications: 'Publication', education: '教育背景', scholarships: '奖学金与荣誉', skills: '常用工具', languages: '语言能力',
    currentWork: '研究兴趣：AI for Science、流形学习、机器学习、Agentic 框架与 AI 能力边界。',
    earlierExperience: 'AI for Science 研究实习', earlierProject: 'DMTME 项目',
    earlierWork: '参与深度流形学习相关的计算实验与数据分析。',
    cvCardTitle: '完整简历', cvCardText: '研究经历、教育背景与技能的完整版本。', cvOpen: '打开简历',
    contactTitle: '博士申请与联系', contactIntro: '我正在寻找博士研究机会，希望向有经验的老师和研究者学习。我的兴趣包括 AI、机器学习、AI for Science 与 Agentic 框架，也对新的研究问题和方法保持开放。如果您有相关的博士招生机会或建议，我将非常感谢有机会进一步交流。',
    email: '邮箱', github: 'GitHub', sendEmail: '发送邮件', githubLink: '访问 GitHub 主页', copy: '复制邮箱', copied: '邮箱已复制', copyFailed: '未能自动复制，邮箱：',
    wechat: '微信', wechatCaption: '扫描二维码添加我的微信。', wechatAlt: '王睿哲的微信二维码', wechatImageOpen: '打开微信二维码原图',
    contactNote: '感谢您抽出时间了解我的工作。',
    contactBand: '寻找博士研究机会', contactBandText: '希望在相关方向继续深入学习和研究，非常期待能够有机会向老师和researcher们请教',
    footer: 'AI for Science · 流形学习 · 机器学习 · Agentic AI',
    notFound: '这一页好像走远了。', backHome: '返回首页',
  },
};
