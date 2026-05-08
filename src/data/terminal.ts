import type { TerminalCommands } from "@/types";

export const terminalCommands: TerminalCommands = {
  whoami: () => `
<div><span class="t-accent">Name:</span> <span class="t-output">Md Mehedi Hassan</span></div>
<div><span class="t-accent">Role:</span> <span class="t-output">Junior Software Developer</span></div>
<div><span class="t-accent">Location:</span> <span class="t-output">Dhaka, Bangladesh 🇧🇩</span></div>
<div><span class="t-accent">University:</span> <span class="t-output">Daffodil International University</span></div>
<div><span class="t-accent">Status:</span> <span class="t-green-text">● Open to Junior / Intern roles</span></div>`,

  skills: () =>
    `<div><span class="t-purple">Frontend:</span>  <span class="t-output">React, Next.js, TypeScript, Tailwind, Framer Motion</span></div>
<div><span class="t-purple">Backend:</span>   <span class="t-output">Python, Go, FastAPI, Node.js, PostgreSQL, Redis</span></div>
<div><span class="t-purple">Infra:</span>     <span class="t-output">Docker, Kubernetes, AWS, GitHub Actions, Terraform</span></div>`,

  projects: () =>
    `<div><span class="t-accent">01</span> <span class="t-output">Distributed Task Queue Engine</span>  <span class="t-green-text">● live</span></div>
<div><span class="t-accent">02</span> <span class="t-output">Todo REST API</span>    <span class="t-purple">◈ research</span></div>
<div><span class="t-accent">03</span> <span class="t-output">Collaborative Code Execution IDE</span> <span class="t-green-text">● live</span></div>
<div><span class="t-accent">04</span> <span class="t-output">Edge Object Detection Pipeline</span>  <span class="t-yellow">◐ wip</span></div>
<div><span class="t-accent">05</span> <span class="t-output">Multi-Tenant Auth & RBAC System</span> <span class="t-green-text">● live</span></div>
<div class="t-output" style="margin-top:8px">→ Scroll to projects section for details</div>`,

  contact: () => `
<div><span class="t-accent">Email:</span>    <span class="t-output">hassanmehedi685@gmail.com</span></div>
<div><span class="t-accent">GitHub:</span>   <span class="t-output">github.com/mehedi0-007</span></div>
<div><span class="t-accent">LinkedIn:</span> <span class="t-output">linkedin.com/in/mehedi-hassan-ba6b29342</span></div>
<div><span class="t-accent">Phone:</span>    <span class="t-output">+8801644559146</span></div>`,

  interests: () =>
    `<div><span class="t-accent">Currently exploring:</span></div>
<div class="t-output">  • LLM fine-tuning & RLHF alignment techniques</div>
<div class="t-output">  • Distributed consensus (Raft, Paxos variants)</div>
<div class="t-output">  • High-performance database internals (LSM trees, B+ trees)</div>
<div class="t-output">  • WebAssembly for edge computing workloads</div>
<div class="t-output">  • Developer tooling and DX improvements</div>`,

  help: () =>
    `<div><span class="t-accent">Available commands:</span></div>
<div class="t-output">  <span class="t-accent">whoami</span>    — About me</div>
<div class="t-output">  <span class="t-accent">skills</span>    — Technical skills</div>
<div class="t-output">  <span class="t-accent">projects</span>  — Project overview</div>
<div class="t-output">  <span class="t-accent">contact</span>   — How to reach me</div>
<div class="t-output">  <span class="t-accent">interests</span> — Current research interests</div>
<div class="t-output">  <span class="t-accent">clear</span>     — Clear terminal</div>`,

  clear: () => null,
};

export const terminalSuggestions = [
  "whoami",
  "skills",
  "projects",
  "contact",
  "interests",
  "clear",
];
