window.SITE_DATA = {
  meta: {
    name: "Stella Kalaitzaki",
    role: "Application Engineer",
    company: "Dataviva",
    location: "Thessaloniki, Greece",
    email: "stl.kalaitzaki@gmail.com",
    github: "https://github.com/StylianiKalaitzaki",
    linkedin: "",
    status: "Modeling supply chain data",
    focus: "Data Modeling · MOLAP · Supply Chain",
  },

  hero: {
    headline: ["Turning, complex data, into clear decisions..."],
    sub: "I build data models and analytical solutions for supply chain operations — working close \
    to the business to make multidimensional data usable and meaningful. Based in Thessaloniki, Greece.",
    ctas: [
      { label: "$ explore --projects", href: "#projects", style: "primary" },
      {
        label: "$ open github",
        href: "https://github.com/StylianiKalaitzaki",
        style: "ghost",
        external: true,
      },
      { label: "$ get --in-touch", href: "#contact", style: "ghost" },
    ],
  },

  about: {
    bio: [
      "I'm an application engineer working at the intersection of data modeling and supply chain \
      logic. My day-to-day involves designing multidimensional data structures (MOLAP cubes), \
      translating complex business requirements into analytical models, and making sure the data \
      tells the right story to the right people.",
      "Currently an <b>Application Engineer at Dataviva</b>, where I work on a supply chain solution \
      — modeling multidimensional data, writing business logic, and collaborating closely with \
      domain experts to turn operational complexity into structured information.",
      "My philosophy: <b>understand the business first, model the data second, automate everything \
      else.</b>",
    ],
    stats: [
      { value: "1+ yrs", label: "production Exp." }
    ],
  },

  mainStack: [
    "SQL",
    "Python"
  ],

  stack: [
    {
      name: "Languages",
      type: "tags",
      items: [
        "Python",
        "SQL",
        "R",
        "Prolog",
        "MiniZinc",
        "Java"
      ],
    }
  ],

  projects: [],
  experience: [
    {
      period: "MAY 2025 - PRESENT",
      role: "Associate Application Engineer",
      company: "Dataviva",
      location: "Thessaloniki, Greece",
      bullets: [
        "Designed and shipped a Kubernetes-native E2E load testing platform (Playwright + Artillery) that enabled data-driven architectural validation before enterprise client go-live. Implemented ephemeral job-based execution, VU auto-splitting, wave-based orchestration, and granular observability - surfacing performance insights that informed platform-wide architectural decisions.",
        "Managed multi-cluster infrastructure via Rancher (K3s) and ArgoCD App of Apps GitOps delivery across internal, external, and client environments.",
        "Automated image build and delivery pipelines via Gitea Actions to Harbor and Azure Container Registry for air-gapped client deployments.",
        "Implemented Prometheus and Grafana observability with Pushgateway for ephemeral job metrics, SLA dashboards, and SQLite-backed regression tracking.",
      ],
      tags: [
        "Python",
        "SVN",
        "PostgreSQL",
        "Supply Chain"
      ],
    }
  ],

  education: [
    {
      period: "OCT 2023 - PRESENT",
      role: "MSc. Artificial Intelligence and Data Analytics",
      company: "Dataviva · Thessaloniki, Greece",
      bullets: [
      ],
      tags: [
        "Python",
        "R",
        "SQL",
        "Prolog",
        "MiniZinc"
      ],
    },
    {
      period: "SEPT 2018 - SEPT 2022",
      role: "BSc. Applied Informatics",
      company: "University of Macedonia · Thessaloniki, Greece",
      desc: "",
      tags: [
      ],
    },
  ],

  certifications: {
    languages: [
      { lang: "Greek", level: "Native" },
      { lang: "English", level: "C2 Proficiency" }
    ],
  },

  contact: {
    intro: "Reach out directly.",
    links: [
      {
        icon: "email",
        platform: "Email",
        handle: "stl.kalaitzaki@gmail.com",
        href: "mailto:stl.kalaitzaki@gmail.com",
      },
      {
        icon: "gh",
        platform: "GitHub",
        handle: "@StylianiKalaitzaki",
        href: "https://github.com/StylianiKalaitzaki",
        external: true,
      }
    ],
  },
};
