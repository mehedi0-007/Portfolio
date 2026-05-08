import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "todo-api",
    category: "Backend · Node.js",
    status: "live",
    title: "Todo REST API",
    description:
      "Secure REST API with dual-token JWT auth, HttpOnly cookie-based refresh tokens in MongoDB with TTL auto-expiry and reuse prevention. Features RBAC middleware, two-tier rate limiting, and full MVC architecture with paginated, filterable endpoints.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "MVC"],
    metrics: [
      { value: "2-tier", label: "rate limiting" },
      { value: "MVC", label: "architecture" },
    ],
    accentColor: "rgba(56, 189, 248, 0.15)",
    glowColor: "rgba(56, 189, 248, 0.12)",
    layout: "wide",
    link: "https://github.com/mehedi0-007/ToDo-app-Backend-", // replace with real link
  },
  {
    id: "pwallet",
    category: "Full-Stack · Finance",
    status: "live",
    title: "Pwallet – Personal Finance App",
    description:
      "Mobile-first MFS wallet app with PIN-authenticated login and a 6-service dashboard. Real-time balance updates, PIN verification, and insufficient-balance validation. Translated a self-designed Figma prototype into pixel-accurate UI.",
    tags: ["HTML5", "CSS3", "TailwindCSS", "DaisyUI", "JavaScript"],
    accentColor: "rgba(52, 211, 153, 0.08)",
    glowColor: "rgba(52, 211, 153, 0.1)",
    layout: "normal",
    link: "https://github.com/mehedi0-007/P_wallet", // replace with real link
  },
  {
    id: "linux-installer",
    category: "DevOps · Automation",
    status: "live",
    title: "Automated Linux Environment Installer",
    description:
      "Bash script that automates installation of development tools and packages. Significantly reduces manual Linux environment setup time with scripting logic and system-level automation.",
    tags: ["Bash", "Linux", "Shell Scripting", "Automation", "CLI"],
    accentColor: "rgba(245, 158, 11, 0.08)",
    glowColor: "rgba(245, 158, 11, 0.08)",
    layout: "wide",
    link: "https://github.com/yourusername/linux-installer", // replace with real link
  },
];
