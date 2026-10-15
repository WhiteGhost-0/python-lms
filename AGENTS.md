<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.


# AGENTS.md — istmX Learn

This file defines the product, architecture, engineering standards, and working rules for AI coding agents contributing to **istmX Learn**. Read this file and `design.md` before making changes. Read `PROGRESS.md` if it exists.

If repository reality conflicts with this plan, inspect the code first and report the conflict. Do not silently rewrite the architecture or assume a feature has already been implemented.

---

## 1. Project overview

**istmX Learn** is a visual-first, text-based learning platform for programming, AI, and related technical subjects.

It is not a video-course platform and is not built around XP, streaks, quests, or reward-loop gamification.

The learning experience centers on:

- Clear, structured written lessons.
- Interactive diagrams, code traces, and visualizations that explain difficult concepts.
- Worked examples with explanations.
- Small practice exercises and knowledge checks.
- A contextual AI tutor with a limited daily usage allowance.
- Independent DSA challenges and projects.
- Meaningful learner progress.
- A privacy-conscious leaderboard based on a documented scoring policy.

The AI tutor should help learners reason and understand, not simply provide answers. During restricted assessments, DSA attempts, and independent projects, it must follow the activity's help policy.

### Product principles

1. Text lessons and examples must stand on their own; AI is optional support, not a prerequisite to learn.
2. Visualizations must teach a concept rather than decorate a screen.
3. Practice should be close to the concept it reinforces.
4. The AI should use relevant curriculum context, not blindly receive the entire curriculum or all user data.
5. Activity rules must be enforced server-side, not only through prompt instructions or client-side UI.
6. Do not invent user statistics, testimonials, scores, course outcomes, or other product claims.
7. No emojis in product UI.
8. Do not add XP, streaks, quests, collectible badges, or similar gamification unless the user explicitly changes this direction.
9. Do not add a full code editor to every lesson. Reserve the dedicated coding workspace for DSA and activities that genuinely require it.
10. The landing page may use the cinematic globe concept. The learning experience should prioritize reading clarity and focused study.

---

## 2. Curriculum source of truth

Existing curriculum source:

- Repository: `https://github.com/istmX/Python`
- Root areas: `basic-python/` and `GENAI/`

Known `basic-python/` modules include:

- `00-Python`
- `01-basics`
- `02-datatypes`
- `03-operators`
- `04-conditions`
- `05-match-case`
- `06-loops`
- `07-mini-ai-assistant`
- `08-functions`
- `09-lambda-functions`
- `10-python-scope`
- `11-recursion`
- `12-comprehensions`
- `13-functional-programming`
- `14-object-oriented-programming`
- `15-modules-and-packages`
- `16-exception-handling`
- `17-file-handling`
- `18-iterators-and-generators`
- `19-builtin-functions`
- `20-final-capstone-project`

Known GenAI paths include:

- `GENAI/01-Introduction-To-GenAi/`
- `GENAI/02-understanding-llms/`
- `GENAI/projects/`
- `GENAI/README.md`

Important distinction: `basic-python/07-mini-ai-assistant/` is a beginner, logic-based Python assistant. It is not the Gemini-powered project in `GENAI/projects/`.

### Curriculum import rules

- Treat the source repository as the authority for existing lesson content.
- Inspect the current repository and the upstream curriculum before building or changing an importer.
- Preserve source paths and useful attribution/metadata.
- Import idempotently; repeated syncs must not create duplicate lessons or assets.
- Validate frontmatter/metadata where present, broken local links, missing assets, duplicate slugs, and unsupported content.
- Preserve code blocks and Markdown semantics.
- Do not silently invent lesson content or claim new material came from the source.
- Add visualizations, explanations, and exercises as explicit platform extensions, associated with their source lesson.
- Keep imported content separate from app state and learner progress.
- Do not confuse the curriculum's Python subject matter with the platform's implementation stack: **the platform itself is JavaScript/TypeScript only**.

---

## 3. Required technology stack

Use the following stack unless the user explicitly approves a change or the existing repository proves that a specific decision has already been made differently. Inspect `package.json`, lockfiles, and existing code before installing or replacing anything.

### Application

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Vercel for deployment

### Authentication and database

- Clerk for authentication.
- Neon PostgreSQL for relational data.
- Drizzle ORM for typed database access, unless the existing repository already has a deliberately adopted ORM that the user approves retaining.
- Use database migrations and typed schemas. Do not change the schema destructively without approval.

### AI

- Vercel AI SDK (`ai`) as the main model integration, streaming, and UI integration layer.
- Provider integration must remain replaceable behind a small server-side provider boundary.
- The preferred initial model route discussed for this project is DeepSeek served through NVIDIA, accessed through a supported OpenAI-compatible/provider integration where current documentation confirms compatibility. Verify current endpoint, model identifier, authentication method, streaming behavior, and SDK compatibility before implementation.
- Do not hardcode provider-specific assumptions into UI components.
- Use environment variables for all credentials.
- LangSmith may be used only if the user explicitly approves it and its integration is useful for tracing/evaluation; do not add it automatically.

### Server state and validation

- TanStack Query when client-side server-state caching, invalidation, or mutations materially help.
- Zod for runtime validation at untrusted boundaries.
- React Hook Form for complex forms where useful; do not add it for simple forms without need.

### UI and interaction

- Tailwind CSS v4.
- Use the existing approved component library and project conventions; shadcn/ui primitives may be used where already adopted or approved.
- Use Tabler Icons as the preferred icon family.
- Use Motion for purposeful interface transitions only if already installed or explicitly approved.
- Use Schibsted Grotesk for display/headings, Inter for body/UI, and JetBrains Mono for code, preserving the repository's existing font-loading setup.

### Explicit technology exclusions

Do not introduce any of the following into the LMS runtime or architecture:

- Python application backend.
- FastAPI or Uvicorn.
- LangChain.
- LangGraph.
- Mistral as a model provider.
- A separate Python RAG service.
- A separate microservice solely to implement AI tutoring or retrieval.

Do not switch to Supabase or Django. Do not introduce a second backend merely because a tutorial or generated plan suggests one.

**RAG, if needed, must be implemented in JavaScript/TypeScript within the existing Next.js application and its supported services.** See the RAG section below.

---

## 4. Architecture rules

Prefer a modular monolith over premature microservices.

- Use Next.js pages/layouts for the interface.
- Use Route Handlers and/or Server Actions for server-side operations, following existing project conventions.
- Keep secrets, database access, model calls, AI policy enforcement, and authorization on the server.
- Keep UI components presentational where practical.
- Keep database queries and business logic out of large page components.
- Separate content retrieval, prompt/context assembly, provider calls, and policy enforcement into focused modules.
- Do not expose provider keys, privileged database credentials, or internal system prompts to the browser.
- Validate ownership and permissions on every protected read/write operation.
- Use Clerk identity on the server and enforce per-user data isolation.
- Use transactions for operations that must update related records atomically.
- Add indexes based on real query patterns, not speculation.
- Prefer stable identifiers and explicit relationships over loosely structured JSON for core relational data.
- Keep external-provider calls resilient with timeouts, bounded retries where safe, and useful error handling.
- Do not claim a task is complete until its relevant checks have been run.

### Suggested organization

Adapt to the existing repository rather than moving everything solely to match this example.

```text
app/
  (marketing)/
  (learn)/
  api/
    ai/
    curriculum/
    practice/
    progress/
    leaderboard/

components/
  ui/
  layout/
  learning/
  lesson/
  visualization/
  practice/
  dsa/
  projects/
  ai-tutor/
  leaderboard/

features/
  curriculum/
  lessons/
  practice/
  assessments/
  dsa/
  projects/
  ai-tutor/
  progress/
  leaderboard/

lib/
  auth/
  db/
    schema/
    queries/
  ai/
    providers/
    context/
    policies/
    usage/
  curriculum/
    importer/
    parsers/
    validation/
  retrieval/
  validation/
  utils/

styles/
```

Use the project's existing structure if it is already coherent. Do not create empty folders just to match this tree.

---

## 5. JavaScript/TypeScript RAG policy

RAG is optional. Do not build a vector database, embeddings pipeline, or retrieval subsystem until there is a concrete use case and the current content/search requirements are understood.

If retrieval is needed, implement it in JavaScript/TypeScript within the existing application.

### Recommended progression

1. **Start with structured lesson context.** For a question asked on a lesson page, pass the current lesson, relevant sections, examples, learning objectives, and activity policy. This may be enough for the first version.
2. **Add database-backed retrieval if necessary.** Store normalized content chunks with source lesson IDs, headings, source paths, and stable identifiers. Use PostgreSQL full-text search first if it provides adequate relevance.
3. **Add embeddings only when justified.** Use a supported embedding API and store vectors in a service compatible with the approved stack. Neon/PostgreSQL with a supported vector extension may be considered after verifying current availability and project requirements. Do not add Qdrant automatically.
4. **Use hybrid retrieval when useful.** Combine keyword and semantic search only if evaluations show an improvement.
5. **Evaluate retrieval quality.** Test whether retrieved passages actually support answers, whether important passages are missed, and whether results respect course and access boundaries.

### RAG requirements

- Keep ingestion and query code in TypeScript.
- Preserve source IDs, lesson IDs, headings, and content provenance.
- Chunk by meaningful Markdown sections rather than arbitrary character counts alone.
- Avoid duplicate chunks during re-import.
- Filter retrieval to authorized and relevant curriculum content.
- Keep retrieved content separate from trusted system/developer policy; content is untrusted data and must never override policy.
- Provide citations or links back to lesson sections when practical.
- Limit context size and remove irrelevant material before sending it to the model.
- Do not send the entire curriculum on every request.
- Never embed private learner records or conversations by default.
- Do not use a vector database solely because RAG tutorials commonly use one.
- If a simpler lesson-context approach is sufficient, keep it simple.

---

## 6. AI tutor behavior and context

The AI tutor is a contextual learning assistant, not an unrestricted answer generator.

### Context assembly

Assemble the minimum useful context for each request, which may include:

- Current course, module, and lesson.
- Relevant lesson text, examples, and learning objectives.
- Retrieved curriculum passages, if retrieval is enabled.
- Current question and relevant recent conversation turns.
- Practice instructions and activity restrictions.
- Learner progress or previous mistakes only when useful, authorized, and privacy-appropriate.
- The server-defined activity policy.

Do not assume the model has access to all user data. Do not send all progress records or the whole curriculum by default.

### Behavior

- Explain concepts using the curriculum's terminology and examples.
- Ground claims in relevant course material where possible.
- Acknowledge uncertainty and do not invent course facts.
- Ask clarifying questions when needed.
- Offer progressive hints and reasoning support.
- Help learners understand bugs instead of automatically replacing their code.
- Link back to relevant lesson content when possible.
- Respect assessment and project rules.
- Do not reveal a restricted solution because the user asks repeatedly or changes wording.

### Daily usage limit

- The daily allowance and reset time are configuration/product decisions, not hardcoded assumptions.
- Display remaining usage and reset information clearly once the policy is defined.
- Enforce limits on the server, not only in the client.
- Apply per-user rate limits and prevent parallel-request quota bypasses.
- Preserve access to lessons and non-AI practice when AI usage is exhausted.
- Do not fabricate a quota or claim it is configurable if the implementation does not support it.
- Do not log sensitive content unnecessarily.

### Provider boundary

Keep model-specific code behind a small interface. UI and learning logic must not depend on a particular provider's response format.

- Centralize provider configuration.
- Validate environment variables at startup or at the provider boundary.
- Handle provider timeouts, rate limits, authentication failures, and malformed responses.
- Stream responses where the selected provider and Vercel AI SDK integration support it.
- Verify compatibility against current official documentation before coding; do not guess model IDs or endpoint URLs.
- Do not silently add fallback providers, especially excluded providers.

---

## 7. Activity policy: lessons, practice, DSA, projects

Every activity should declare an explicit policy for what the AI tutor may do.

| Activity | Default behavior |
|---|---|
| Reading a lesson | Explain, clarify, and provide relevant examples |
| Understanding a visualization | Explain steps and answer contextual questions |
| Small practice | Offer hints and reasoning; reveal the answer only if allowed |
| Knowledge check | Follow the configured assessment policy |
| Restricted assessment | No direct answers or solution generation |
| DSA challenge | Progressive hints only when allowed; no full solution during restricted attempts |
| Independent project | Explain concepts, interpret errors, and review learner-provided work within policy |
| General learning question | Use relevant curriculum context when available |

Enforce this policy server-side. Prompt text alone is not an authorization boundary.

### Code execution safety

- Never execute untrusted learner code directly on the Next.js application server.
- Do not build a code runner until its isolation architecture is defined and approved.
- If execution is implemented, use a properly isolated environment with resource limits, timeouts, restricted network/filesystem access, and controlled dependencies.
- Keep test cases and hidden evaluation data server-side.
- Validate submissions and prevent replay or duplicate completion events.
- A code editor is not required for every lesson. Use it for DSA and activities that genuinely need it.

---

## 8. Leaderboard requirements

A leaderboard is allowed, but must be meaningful, transparent, and privacy-conscious.

- Do not invent leaderboard entries or seed fake production scores.
- Use a documented scoring formula based on verified learning outcomes, challenge submissions, assessment results, or project milestones.
- Do not rank based solely on time spent, number of AI prompts, or repeated trivial actions.
- Do not expose email addresses, private projects, or private learning history.
- Use a display name and consider opt-out behavior.
- Consider weekly or topic-based leaderboards.
- Keep leaderboard UI secondary to learning.
- The ranking formula, scope, and privacy behavior must be approved before implementation.

---

## 9. Design system

Read `design.md` for the complete specification. The key requirements are:

- Visual direction: **Paper & Graphite**.
- Complete light and dark themes.
- Light mode: warm paper canvas, near-white surfaces, charcoal text, fine borders, and very subtle grain on the page canvas only.
- Dark mode: layered charcoal surfaces, restrained borders, soft neutral text, and no excessive glow.
- Blue for primary actions, links, focus, and active states.
- Schibsted Grotesk for display, Inter for body/UI, JetBrains Mono for code.
- Tabler Icons as the preferred icon family.
- Minimal editorial layout, readable lessons, restrained radius and shadows.
- No emojis in product UI.
- No purple gradients, giant glowing blobs, repetitive generic card grids, or decorative effects that interfere with learning.
- Use semantic CSS tokens and Tailwind CSS v4 `@theme inline`.
- Verify contrast, keyboard focus, reduced motion, and mobile layouts.

Preserve existing font loading and theme initialization when changing `globals.css`. Do not replace the entire stylesheet without inspecting its current contents and understanding existing imports, tokens, and dependencies.

---

## 10. Security, privacy, and data integrity

- Enforce authentication and authorization on the server.
- Use Clerk identity to scope user-owned records.
- Validate all external inputs with schemas.
- Never trust client-supplied user IDs, role values, reward values, quotas, scores, or submission status.
- Keep secrets in environment variables and never commit them.
- Add rate limits to AI endpoints and other abuse-prone routes.
- Use safe Markdown rendering; sanitize untrusted HTML and prevent script injection.
- Prevent cross-user access to progress, submissions, conversations, projects, and profile data.
- Do not log private learner content or credentials unnecessarily.
- Keep retention and deletion behavior explicit.
- Do not claim a feature is secure without testing its relevant boundaries.

---

## 11. Engineering standards

### Code quality

- Prefer clear, explicit, maintainable TypeScript.
- Avoid `any`; use it only with a documented reason when a safe type is unavailable.
- Use server components by default; add client components only where interaction requires them.
- Keep components focused. Follow the project rule of a maximum of **250 lines per component/file where practical**; extract meaningful units rather than splitting code mechanically.
- Keep business logic, schemas, types, and reusable hooks out of oversized UI components.
- Avoid duplicate utilities and multiple competing implementations of the same behavior.
- Avoid premature abstractions and unnecessary dependencies.
- Use accessible semantic HTML.
- Use stable keys in lists.
- Handle loading, empty, error, success, and disabled states where applicable.
- Avoid `console.log` debugging in committed production code.
- Do not leave dead code, placeholder content, fake data, or TODOs without a clear reason and follow-up.

### Dependencies

- **Ask before installing a new package.**
- First check whether the repository already has a suitable dependency.
- Explain why a dependency is needed and whether the existing stack can handle the task.
- Do not add Python packages or Python project files to implement platform features.
- Do not change major dependency versions without approval.

### Comments

- Write code that explains itself through clear names and structure.
- Add comments for non-obvious decisions, security boundaries, tricky algorithms, and important tradeoffs.
- Do not add generic comments that merely restate the code.

### Tests and verification

After a meaningful change, run the checks appropriate to the repository, such as:
- TypeScript type-check.
- Lint.
- Unit or integration tests relevant to the change.
- Production build when practical.
- Import/export and route checks for modified modules.

Report checks that could not be run. Never say tests passed unless they were actually run.

---

## 12. Mandatory coding-agent workflow

For every task:

1. Read `AGENTS.md`, `design.md`, and `PROGRESS.md` if it exists.
2. Inspect the current repository structure and relevant files before editing.
3. Identify the requested outcome and the smallest set of files that should change.
4. If the request is ambiguous about which control, color, or behavior should change, ask a direct clarification instead of guessing.
5. Ask before changing application logic, dependencies, database schema, auth behavior, security policy, destructive operations, or ambiguous UI targets.
6. Do not rewrite unrelated files or perform broad refactors for a small request.
7. Implement the smallest coherent change that meets the requirement.
8. Verify imports, exports, routes, types, and behavior.
9. Run relevant checks and report their actual results.
10. Update `PROGRESS.md` after meaningful work.
11. Summarize what changed, which files changed, what was verified, and what remains incomplete.

### Approval gates

Ask the user before:
- Installing a package.
- Changing the agreed stack or adding a backend/service.
- Changing application logic when the requested behavior is not explicit.
- Changing database schema or performing migrations with destructive impact.
- Changing authentication, authorization, AI policy, or data retention.
- Deleting, overwriting, or moving user data or important files.
- Choosing between multiple plausible UI elements when the target is unclear.

Do not ask for approval for every small, clearly specified styling change or routine implementation detail. Use judgment.

---

## 13. Progress tracking

Maintain `PROGRESS.md` as the durable implementation record.

After each meaningful task, record:
- Date or work session.
- Feature/task completed.
- Files changed.
- Tests and checks run, including failures.
- Architecture or product decisions made.
- Known limitations and unresolved questions.
- The next concrete task.

Never mark a phase complete based only on a plan. Mark it complete only when the code and verification support that status. Keep planned, in-progress, blocked, and completed work distinct.

---

## 14. Product decisions that remain open

Do not invent these details. Ask or leave them configurable until approved:

- Exact daily AI usage allowance and reset time.
- Whether AI usage will ever have paid tiers.
- Model identifier, endpoint, and final provider configuration after compatibility verification.
- RAG strategy beyond lesson-context assembly.
- Whether/when embeddings or vector search are needed.
- Leaderboard scoring formula, time window, scope, and opt-out behavior.
- Code execution architecture and infrastructure for DSA.
- Exact assessment policy for each activity.
- Data retention policy for AI conversations and traces.
- Which lessons receive custom interactive visualizations first.

---

## 15. Definition of done

A task is complete only when:

- It meets the requested behavior and this product direction.
- It follows the agreed JavaScript/TypeScript stack.
- It does not introduce excluded frameworks or an unapproved dependency.
- It respects auth, access controls, and activity policies.
- Both light and dark themes remain coherent where UI is affected.
- Relevant accessibility and responsive behavior are checked.
- Relevant tests or build checks have been run, or limitations are stated.
- `PROGRESS.md` is updated after meaningful implementation work.
- No fake metrics, testimonials, leaderboard data, or unsupported claims were introduced.

**North star:** Teach the concept, visualize the difficult part, let the learner practice, and use AI to help them think—not to do the learning for them.


<!-- END:nextjs-agent-rules -->
