// ─── Project Types ───────────────────────────────────────────────────────────

export type ProjectStatus = "live" | "research" | "wip";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  image?: string;
  category: string;
  status: ProjectStatus;
  title: string;
  description: string;
  tags: string[];
  metrics?: ProjectMetric[];
  accentColor: string;
  glowColor: string;
  layout?: "wide" | "tall" | "normal";
  gridArea?: string;
  link?: string;
}

// ─── Skill Types ─────────────────────────────────────────────────────────────

export interface SkillGroup {
  icon: string;
  name: string;
  tags: string[];
}

// ─── Research Types ──────────────────────────────────────────────────────────

export interface ResearchLink {
  label: string;
  href: string;
}

export interface ResearchItem {
  id: string;
  year: string;
  title: string;
  venue: string;
  abstract: string;
  links: ResearchLink[];
}

// ─── Timeline Types ──────────────────────────────────────────────────────────

export interface TimelineEntry {
  id: string;
  date: string;
  role: string;
  company: string;
  description: string;
  achievements: {
    label: string;
    href?: string;
  }[];
}

// ─── Terminal Types ──────────────────────────────────────────────────────────

export type TerminalCommandFn = () => string | null;

export interface TerminalCommands {
  [key: string]: TerminalCommandFn;
}

// ─── Shared Types ─────────────────────────────────────────────────────────────

export interface HeroStat {
  value: string;
  label: string;
}

export interface Interest {
  icon: string;
  label: string;
  tag: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "email" | "github" | "linkedin" | "twitter";
}
