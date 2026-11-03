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
    "I design and ship production NLP, LLM, and agentic systems that improve quality, automate complex workflows, and reduce latency and inference cost.",
  intro:
    "Engineer with 4+ years across applied research and production delivery, focused on agentic workflows, evaluation, RAG, and end-to-end ML product integration. Currently building AI-assisted clinical trial case reviews at Sanofi.",
  email: "mehdichouham@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/el-mehdi-chouham/",
    github: "https://github.com/Pazuzzu",
    scholar: "https://scholar.google.com/citations?user=HCWCclIAAAAJ&hl",
    medium: "https://medium.com/@pazuzzu"
  },
  cvPath: "cv/El-Mehdi-CHOUHAM-9-enpfe.pdf",
  metrics: [
    {
      value: "~4x",
      label: "Case Review Throughput",
      context: "Clinical trial case reviews per user at Sanofi"
    },
    {
      value: "90%",
      label: "Clinical Review F2",
      context: "Validated against data labeled by clinical users cleared on the studies of interest"
    },
    {
      value: "+13%",
      label: "Intent & Entity F1",
      context: "Migrating MaxEnt models to transformer architecture"
    },
    {
      value: "-74%",
      label: "Inference Cost",
      context: "Model and infrastructure optimization by a separate team at SNCF"
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
      role: "Machine Learning Engineer - Agentic (Freelance)",
      company: "Sanofi",
      period: "Jan 2026 - Present",
      location: "Paris, France",
      summary:
        "Built an agentic system to automate clinical trial patient case reviews, reconciling safety narratives with hospital forms and pharmacovigilance records to flag discrepancies.",
      bullets: [
        "Designed a Pydantic AI + Bedrock flow to extract safety narratives and cross-check related records.",
        "Validated core use cases against clinically labeled data with an eval-first approach (90% F2).",
        "Built a reviewer feedback loop with GEPA (DSPy) prompt optimization and W&B Weave evaluation tracking.",
        "Increased case review throughput per user by approximately 4x."
      ],
      stack: ["Python", "Pydantic AI", "AWS AgentCore", "Bedrock", "DSPy", "W&B Weave"]
    },
    {
      role: "Lead Machine Learning Engineer - NLP (Freelance)",
      company: "SNCF Connect & Tech",
      period: "Apr 2024 - Dec 2025",
      location: "Paris, France",
      summary:
        "Led NLP evolution and generative AI integration for France's two largest customer-facing railway chatbots.",
      bullets: [
        "Migrated MaxEnt intent/entity models to transformers (+13% F1).",
        "Designed and deployed a RAG search agent with rephrasing and memory using Claude/Cohere on Bedrock + MongoDB (96% recall @k=2).",
        "Led synthetic data generation, annotation, and pre-production traffic simulation.",
        "Reduced bot response latency by 95% through tight Kotlin integration, replacing the microservice architecture."
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
      items: ["PyTorch", "TensorFlow", "Triton", "JAX", "Transformers", "ONNX", "Hugging Face"]
    },
    {
      category: "LLM & Agents",
      items: ["Pydantic AI", "AWS AgentCore", "AWS Bedrock", "DSPy", "LangChain", "Unsloth", "vLLM", "TGI", "SageMaker", "Vertex AI"]
    },
    {
      category: "MLOps & Evaluation",
      items: ["FastAPI", "Docker", "Git", "Terraform", "AWS", "GCP", "Langfuse", "W&B", "Weave"]
    },
    {
      category: "Data & Vector",
      items: ["Postgres/pgvector", "MongoDB", "Milvus", "Pinecone", "Chroma", "BigQuery"]
    }
  ]
};
