import type { TimelineEntry } from "@/types";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "degree",
    date: "2022 — 2026",
    role: "B.Sc. Computer Science & Engineering",
    company: "Daffodil International University · Dhaka, Bangladesh",
    description:
      "Pursuing my degree with a CGPA of 3.68/4.00. Building strong fundamentals in algorithms, systems, and software engineering. Actively involved in the competitive programming community.",
    achievements: [
      { label: "CGPA 3.68/4.0" },
      { label: "Team Working" },
      { label: "Leadership" },
      { label: "Communication Skill" },
    ],
  },
  {
    id: "Competitive Programming",
    date: "2022 - Present",
    role: "Competitive Programming",
    company: "Self",
    description:
      'I have solved at least 500+ problems accross various online platfomrs including CodeForces, CodeChef, Leetcode, Vjudge, beeCrowd. I have ranked 4th in the "Unlock the Algorithm Final contest 2023" arranged by DIU advanced programming club.',
    achievements: [
      {
        label: "CodeForces",
        href: "https://codeforces.com/profile/mehedi-007",
      },
      {
        label: "LeetCode",
        href: "https://leetcode.com/u/mehdi2256/",
      },
      {
        label: "CodeChef",
        href: "https://www.codechef.com/users/mehedi2256",
      },
      {
        label: "UTA 4th Rank",
        href: "https://toph.co/c/unlock-the-algorithm-fall-23-final/standings",
      },
    ],
  },
  {
    id: "trainer-judge",
    date: "2023 — Present",
    role: "Trainer & Judge",
    company: "Daffodil International University · Programming Community",
    description:
      "Mentored 20+ students in data structures and algorithms. Served as a judge for CodeConomics and CodeConomics-2.0 programming contests, helping evaluate and inspire the next generation of competitive programmers.",
    achievements: [
      { label: "20+ students mentored" },
      { label: "CodeConomics Judge" },
      { label: "CodeConomics-2.0 Judge" },
    ],
  },
  {
    id: "todo-api-project",
    date: "2026",
    role: "Backend Project — Todo REST API",
    company: "Personal Project · Node.js & MongoDB",
    description:
      "Built a production-quality REST API with dual-token JWT auth, RBAC middleware, and two-tier rate limiting. Implemented HttpOnly cookie refresh token rotation with TTL-based auto-expiry to prevent reuse attacks.",
    achievements: [
      { label: "JWT dual-token auth" },
      { label: "RBAC middleware" },
      { label: "MVC architecture" },
      { label: "Mongoose" },
      { label: "Express Js" },
    ],
  },
];
