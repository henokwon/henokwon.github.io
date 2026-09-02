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
    title: "Backend Platform Architecture",
    icon: backend,
  },
  {
    title: "Security, Monitoring & Reliability",
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
    icon: creator,
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Worked on architecture and backend development for SDID, a national digital identity platform covering enrollment and pre-enrollment workflows.",
      "Built NestJS/Nx services across auth, admin, account, notification, analytics, media, sync, and enrollment domains.",
      "Implemented Kafka-driven synchronization, API gateway integrations, Redis caching, Cassandra data models, and offline encrypted storage with SQLCipher.",
      "Applied DevSecOps practices across JWT/RBAC, API keys, TLS/mTLS, dependency scanning, container scanning, observability, and automated quality gates.",
      "Built HuzaPilot, a polyglot microservices generator supporting NestJS, FastAPI, Spring Boot, Go/Gin, Docker Compose, OpenAPI, Prometheus, Grafana, and Loki.",
    ],
  },
  {
    title: "ERP Software Developer",
    companyName: "Zergaw Cloud",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "May 2025 - Nov 2025",
    points: [
      "Led ERP customization initiatives across manufacturing, retail, and service sectors with specialized modules, integrations, and optimized workflows.",
      "Engineered Python and PostgreSQL-based ERP modules for tax computation, bank reconciliation, quality management, inventory control, and reporting.",
      "Built integrations with payment gateways and banking APIs including Chapa, CBE Birr, Stripe, and external financial systems.",
      "Developed middleware for WooCommerce, Magento, custom e-commerce platforms, XML-RPC connectors, REST APIs, and legacy system modernization.",
      "Optimized PostgreSQL schemas with indexing, partitioning, and materialized views for high-volume transaction processing.",
    ],
  },
  {
    title: "System & Cloud Engineer",
    companyName: "IE Networks",
    icon: mobile,
    iconBg: "#383E56",
    date: "Jul 2024 - Jul 2025",
    points: [
      "Worked across cloud infrastructure, Linux systems, virtualization, storage, networking, and enterprise platform operations.",
      "Supported infrastructure planning for resilient services, disaster recovery, business continuity, and secure system administration.",
      "Applied monitoring, logging, troubleshooting, and incident-analysis practices to improve infrastructure visibility.",
      "Strengthened hands-on exposure to VMware, Proxmox, server architecture, data center networking, SAN/NAS storage, and cloud operations.",
    ],
  },
  {
    title: "Senior Software Engineer | Tech Lead",
    companyName: "Horizon Tech ICT Solutions",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jun 2024",
    points: [
      "Led backend and platform delivery for business systems, API gateways, ERP customization, payment integrations, and legacy system modernization.",
      "Improved release quality through CI/CD workflows, containerized environments, automated checks, and clearer engineering standards.",
      "Designed database-backed services with attention to modeling, indexing, backup strategy, data integration, and operational reliability.",
      "Strengthened security posture across access control, system hardening, compliance-aware workflows, and production observability.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "AI and Robotics Center of Excellence at AASTU",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2021 - Jun 2022",
    points: [
      "Contributed to applied software projects involving backend services, data handling, and integration work in a research-focused engineering environment.",
      "Worked with Python, JavaScript, APIs, and database-backed applications while strengthening software architecture and delivery discipline.",
      "Supported cross-functional implementation work between engineering, research, and operational stakeholders.",
      "Documented technical findings and improved maintainability for systems handed across teams.",
    ],
  },
  {
    title: "DevSecOps & Backend Consultant",
    companyName: "Freelance",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Present",
    points: [
      "Designed and delivered backend-heavy web platforms with secure API integrations, authentication flows, and production deployment practices.",
      "Built automation around deployment, environment configuration, monitoring, and release handoffs to reduce manual operational work.",
      "Modernized legacy workflows with pragmatic architecture choices across Node.js, Django, React, databases, and Linux-based hosting environments.",
      "Advised teams on reliability basics that matter in production: backups, logging, access control, incident response, and maintainable infrastructure.",
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
    sourceCodeLink: "https://github.com/henokwon",
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
    sourceCodeLink: "https://github.com/henokwon",
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
    sourceCodeLink: "https://github.com/henokwon",
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
