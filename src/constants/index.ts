import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  golang,
  aws,
  kubernetes,
  terraform,
  linux,
  postgresql,
  redis,
  kafka,
  githubActions,
  prometheus,
  grafana,
  huzaLabs,
  zergaw,
  etplus,
  freelance,
  IE,
  AASTU,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "consulting",
    title: "Consulting",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "DevSecOps Engineering",
    icon: web,
  },
  {
    title: "Cloud & Infrastructure",
    icon: mobile,
  },
  {
    title: "Platform Architecture",
    icon: backend,
  },
  {
    title: "Monitoring & Reliability",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "GitHub Actions",
    icon: githubActions,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior Software Engineer | Tech Lead",
    companyName: "HuzaLabs",
    icon: huzaLabs,
    iconBg: "#ffffff",
    date: "Nov 2025 - Present",
    points: [
      "Built SDID identity services with NestJS/Nx, Kafka, Redis, and Cassandra.",
      "Secured delivery with RBAC, mTLS, container scanning, and automated checks.",
      "Built HuzaPilot for polyglot microservices, Docker, and integrated observability.",
    ],
  },
  {
    title: "ERP Software Developer",
    companyName: "Zergaw Cloud",
    icon: zergaw,
    iconBg: "#ffffff",
    date: "May 2025 - Nov 2025",
    points: [
      "Built Python/PostgreSQL ERP modules for tax, inventory, and reconciliation.",
      "Integrated Chapa, CBE Birr, Stripe, and e-commerce platforms through APIs.",
      "Optimized transaction workloads with indexing, partitioning, and materialized views.",
    ],
  },
  {
    title: "System & Cloud Engineer",
    companyName: "IE Networks",
    icon: IE,
    iconBg: "#0b1228",
    date: "Jul 2024 - Jul 2025",
    points: [
      "Worked with Linux, VMware, and Proxmox across enterprise cloud infrastructure.",
      "Supported resilient networks, SAN/NAS storage, and disaster recovery planning.",
      "Improved operational visibility through monitoring, logging, and incident analysis.",
    ],
  },
  {
    title: "Senior DevOps Engineer",
    companyName: "ETPlus",
    icon: etplus,
    iconBg: "#ffffff",
    date: "Nov 2022 - Present",
    points: [
      "Automated releases with CI/CD pipelines, containers, and quality checks.",
      "Hardened production systems with access controls and integrated observability.",
      "Supported API platforms and database reliability through indexing and backups.",
    ],
  },
  {
    title: "Research Fellow | MSc Fast-Track Programme",
    companyName: "AI and Robotics Center of Excellence at AASTU",
    icon: AASTU,
    iconBg: "#ffffff",
    date: "Jan 2021 - Jun 2022",
    points: [
      "Pursued research through the MSc fast-track programme in AI and robotics.",
      "Developed research software with Python, JavaScript, APIs, and data-backed apps.",
      "Collaborated with researchers and engineers to document and implement findings.",
    ],
    fellowship: {
      title: "AI4D Fellowship · Completed",
      description:
        "Artificial Intelligence for Development training in Kenya and Addis Ababa, Ethiopia, one year apart.",
    },
  },
  {
    title: "Full Stack Software Development",
    companyName: "Freelance",
    icon: freelance,
    iconBg: "#0b1228",
    date: "Mar 2019 - Present",
    points: [
      "Delivered full-stack software for clients including HorizonTech ICT Solutions.",
      "Built React interfaces and Node.js/Django services with secure API integrations.",
      "Automated Linux deployments, monitoring, and backups for reliable operations.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "SDID Digital Identity Platform",
    description:
      "National-scale identity platform work across enrollment, pre-enrollment, API gateway, biometric workflows, Kafka synchronization, Cassandra modeling, offline encrypted storage, and secure external integrations.",
    signal: "verify the boundary",
    tags: [
      {
        name: "nestjs-nx",
        color: "blue-text-gradient",
      },
      {
        name: "kafka-cassandra",
        color: "green-text-gradient",
      },
      {
        name: "devsecops",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "HuzaPilot Developer Platform",
    description:
      "Polyglot microservice generator and deployment platform that creates NestJS, FastAPI, Spring Boot, and Go/Gin services with Docker, OpenAPI aggregation, CI/CD, and monitoring recipes.",
    signal: "reduce theory to artifact",
    tags: [
      {
        name: "cli-generator",
        color: "blue-text-gradient",
      },
      {
        name: "docker-ghcr",
        color: "green-text-gradient",
      },
      {
        name: "prometheus-grafana",
        color: "pink-text-gradient",
      },
    ],
    sourceCodeLink: "https://github.com/Huzalabs/huzapilot",
  },
  {
    name: "Killa Anti-Sabotage Proxy",
    description:
      "Security proxy ecosystem for protecting APIs, AI services, webhooks, and admin surfaces with request hardening, semantic filtering, proof-of-work pressure gates, attestation SDKs, deployment adapters, and release evidence.",
    signal: "test the edge, then block",
    tags: [
      {
        name: "go-security",
        color: "blue-text-gradient",
      },
      {
        name: "sdk-adapters",
        color: "green-text-gradient",
      },
      {
        name: "sbom-provenance",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "ERP Modernization Suite",
    description:
      "Enterprise ERP customization across tax engines, bank reconciliation, quality control, inventory optimization, payment gateways, e-commerce sync, and PostgreSQL performance tuning.",
    signal: "measure before belief",
    tags: [
      {
        name: "python-postgres",
        color: "blue-text-gradient",
      },
      {
        name: "payments",
        color: "green-text-gradient",
      },
      {
        name: "workflow-automation",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "ChaBo Channel Services",
    description:
      "Reusable chatbot channel services for WhatsApp, speech, and embeddings with clear service boundaries, Docker Compose environments, UAT recipes, and API-contract driven integration.",
    signal: "interfaces reveal reality",
    tags: [
      {
        name: "whatsapp-speech",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "docker-compose",
        color: "pink-text-gradient",
      },
    ],
    sourceCodeLink: "https://github.com/henokwon/chabo",
  },
  {
    name: "GIS, GEE & Drought Forecasting",
    description:
      "Geospatial analytics work using Google Earth Engine, TerraClimate PDSI/SPEI, Landsat imagery, Ethiopia boundary datasets, regional exports, drought visualization, and PDSI time-series forecasting.",
    signal: "prediction is the receipt",
    tags: [
      {
        name: "google-earth-engine",
        color: "blue-text-gradient",
      },
      {
        name: "pdsi-spei",
        color: "green-text-gradient",
      },
      {
        name: "time-series",
        color: "pink-text-gradient",
      },
    ],
    sourceCodeLink: "https://github.com/henokwon/GEE",
  },
];

export { services, technologies, experiences, testimonials, projects };
