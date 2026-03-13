export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type ExperienceHighlight = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  name: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: number;
  citations: number;
  authors: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type PortfolioProfile = {
  name: string;
  title: string;
  location: string;
  pitch: string;
  intro: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    scholar: string;
    medium: string;
  };
  cvPath: string;
  metrics: Metric[];
  experienceHighlights: ExperienceHighlight[];
  projects: Project[];
  publications: Publication[];
  skills: SkillGroup[];
};

export const profile: PortfolioProfile = {
  name: "El Mehdi CHOUHAM",
  title: "Machine Learning Engineer - NLP",
  location: "Paris, France",
  pitch:
    "I design and ship production NLP and LLM systems that improve product quality, reduce latency, and cut inference cost at scale.",
  intro:
    "Engineer with 4+ years across applied research and production delivery, with a focus on RAG, model optimization, and end-to-end ML product integration.",
  email: "mehdichouham@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/el-mehdi-chouham/",
    github: "https://github.com/Pazuzzu",
    scholar: "https://scholar.google.com/citations?user=HCWCclIAAAAJ&hl",
    medium: "https://medium.com/@pazuzzu"
  },
  cvPath: "cv/El-Mehdi-CHOUHAM-8-enfe.pdf",
  metrics: [
    {
      value: "+13%",
      label: "Intent & Entity F1",
      context: "Migrating MaxEnt models to transformer architecture"
    },
    {
      value: "-74%",
      label: "Inference Cost",
      context: "Model and infrastructure optimization in production"
    },
    {
      value: "96%",
      label: "RAG Recall @k=2",
      context: "Railway chatbot search agent on Bedrock + MongoDB"
    },
    {
      value: "-95%",
      label: "Response Latency",
      context: "Kotlin integration replacing microservice overhead"
    }
  ],
  experienceHighlights: [
    {
      role: "Lead Machine Learning Engineer - NLP (Freelance)",
      company: "SNCF Connect & Tech",
      period: "Apr 2024 - Present",
      location: "Paris, France",
      summary:
        "Led NLP evolution and generative AI integration for France's largest customer-facing railway chatbots.",
      bullets: [
        "Migrated intent/entity models to transformers for measurable quality gains.",
        "Designed and deployed a RAG search agent with rephrasing and memory capabilities.",
        "Led synthetic data generation, annotation, and pre-production traffic simulation."
      ],
      stack: ["Python", "PyTorch", "AWS Bedrock", "MongoDB", "LangChain", "Terraform", "Kotlin"]
    },
    {
      role: "Machine Learning Engineer - NLP",
      company: "Apicil (Novelis)",
      period: "Jan 2024 - Apr 2024",
      location: "Paris, France",
      summary:
        "Sole NLP/LLM engineer building a production RAG assistant for insurance brokers.",
      bullets: [
        "Built a PDF ingestion pipeline with parsing, chunking, and hybrid embeddings (91% recall @k=2).",
        "Prototyped and tuned Mistral-based prompting workflows with LangChain.",
        "Shipped the agent to production through a FastAPI service."
      ],
      stack: ["Python", "PyTorch", "Mistral", "LangChain", "FastAPI"]
    },
    {
      role: "Research Machine Learning Engineer - NLP",
      company: "IRIS (Novelis)",
      period: "Jan 2023 - Apr 2024",
      location: "Paris, France",
      summary:
        "Built a computer-use AI agent that converts user intent into executable OS and web actions.",
      bullets: [
        "Designed an end-to-end agentic pipeline from instruction parsing to command execution.",
        "Fine-tuned and quantized LLMs for task decomposition into atomic actions.",
        "Deployed Dockerized FastAPI microservices on GCP with scheduled orchestration."
      ],
      stack: ["Python", "PyTorch", "spaCy", "Whisper", "GCP", "Docker", "FastAPI", "Terraform"]
    },
    {
      role: "Research Machine Learning Engineer - NLP",
      company: "AIDA (Novelis)",
      period: "Oct 2021 - Dec 2022",
      location: "Paris, France",
      summary:
        "Developed a Java code generation copilot from natural language project descriptions.",
      bullets: [
        "Fine-tuned CodeBERT and pre-trained CodeT5 variants for generation quality.",
        "Ranked 1st and 2nd on Microsoft CodeXGLUE (JacoText).",
        "Co-authored publications on LLM evaluation and code generation."
      ],
      stack: ["Python", "PyTorch", "CodeBERT", "CodeT5", "spaCy", "BigQuery"]
    }
  ],
  projects: [
    {
      name: "Debby",
      period: "Aug 2025 - Dec 2025",
      role: "Founder & Software/AI Engineer",
      summary:
        "Built a platform that evaluates content credibility and detects bias, fallacies, and factual issues across mixed media.",
      bullets: [
        "Designed a modular multi-stage AI pipeline for ingestion and analysis.",
        "Implemented credit billing, token-level cost tracking, and queued processing.",
        "Integrated Langfuse observability and PostHog product analytics."
      ],
      stack: ["Next.js 15", "TypeScript", "Convex", "Anthropic", "Gemini", "Vercel AI SDK", "Langfuse", "Cloudflare R2"]
    },
    {
      name: "Bitmatcha",
      period: "Dec 2025 - Jan 2026",
      role: "Founder & Software/AI Engineer",
      summary:
        "Built a platform matching developers with cofounders through GitHub activity signals.",
      bullets: [
        "Created a custom GraphQL-based scoring algorithm from commit and skill signals.",
        "Built real-time one-to-one messaging with read receipts and pagination.",
        "Shipped the first production version in weeks."
      ],
      stack: ["Next.js 15", "TypeScript", "Convex", "GitHub OAuth", "Resend", "PostHog"]
    },
    {
      name: "Ardoise",
      period: "Sep 2024 - Jul 2025",
      role: "CTO & Cofounder",
      summary:
        "Co-founded a SaaS product that transforms documents into interactive quizzes for education and HR.",
      bullets: [
        "Implemented AI-driven document parsing with real-time quiz generation.",
        "Set up CI/CD and reliability stack with semantic versioning and monitoring.",
        "Integrated Stripe billing and OAuth authentication."
      ],
      stack: ["Next.js 14", "TypeScript", "Tailwind", "Stripe", "Docker", "GitHub Actions", "Sentry"]
    }
  ],
  publications: [
    {
      title:
        "GPT-3.5, GPT-4, or BARD? Evaluating LLMs reasoning ability in zero-shot setting and performance boosting through prompts",
      venue: "Natural Language Processing Journal",
      year: 2023,
      citations: 176,
      authors: "J.L. Espejel, E.H. Ettifouri, M.S.Y. Alassan, E.M. Chouham, W. Dahhane"
    },
    {
      title:
        "A comprehensive review of state-of-the-art methods for Java code generation from natural language text",
      venue: "Natural Language Processing Journal",
      year: 2023,
      citations: 25,
      authors: "J.L. Espejel, M.S.Y. Alassan, E.M. Chouham, W. Dahhane, E.H. Ettifouri"
    }
  ],
  skills: [
    {
      category: "Languages & Core",
      items: ["Python", "SQL", "TypeScript", "Linux", "Statistics"]
    },
    {
      category: "Deep Learning",
      items: ["PyTorch", "TensorFlow", "JAX", "Transformers", "ONNX", "Hugging Face"]
    },
    {
      category: "LLM & MLOps",
      items: ["LangChain", "vLLM", "TGI", "FastAPI", "Docker", "Terraform", "AWS", "GCP"]
    },
    {
      category: "Data & Vector",
      items: ["Postgres/pgvector", "MongoDB", "Milvus", "Pinecone", "Chroma", "BigQuery"]
    }
  ]
};
