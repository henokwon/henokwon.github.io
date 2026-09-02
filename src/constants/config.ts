type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    consulting: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Henok | Senior Software Engineer",
    fullName: "Henok",
    email: "henokwon@gmail.com",
  },
  hero: {
    name: "Henok",
    p: ["Senior Software Engineer"],
  },
  contact: {
    p: "Direct line",
    h2: "Signal me.",
    content:
      "For serious engineering conversations, audits, deployments, or consulting work, reach me directly on WhatsApp or Telegram.",
  },
  sections: {
    about: {
      p: "Security-minded engineering",
      h2: "Profile.",
      content: `Senior Software Engineer and DevSecOps-focused platform engineer with a
      backend-heavy foundation across cloud infrastructure, CI/CD automation, containerized
      systems, API platforms, monitoring, disaster recovery, and secure delivery practices.
      I work across AWS, Azure, Google Cloud, Linux, Docker, Kubernetes, Terraform, GitHub
      Actions, Jenkins, Python, TypeScript, Go, and modern backend frameworks to build
      reliable systems that are observable, compliant, recoverable, and production-ready.`,
    },
    experience: {
      p: "Systems I have delivered and secured",
      h2: "Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Proof from the field",
      h2: "Production Signals.",
      content: `A curated view of the systems that best represent my current direction:
    national digital identity infrastructure, developer-platform automation, AI/RAG service
    components, secure API integrations, observability, and DevSecOps workflows. Public
    GitHub shows earlier foundations; these production signals show the senior platform
    engineering story more clearly.`,
    },
    consulting: {
      p: "Consulting & ventures",
      h2: "Secure delivery for serious systems.",
      content: `I help teams move serious systems from fragile delivery to secure,
    observable, deployment-ready platforms. My consulting work focuses on backend
    architecture, DevSecOps, cloud infrastructure, release automation, and production
    reliability — while my founder track with Killa pushes that thinking into security
    tooling for APIs, AI services, webhooks, and exposed admin surfaces.`,
    },
  },
};
