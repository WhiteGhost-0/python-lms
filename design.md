# istmX Learn — Design & Product Experience

**Version:** 1.1  
**Product direction:** Visual-first, text-based learning  
**Visual system:** Paper & Graphite  
**Status:** Updated product direction; verify implementation details against the current repository.

---

## 1. Product vision

istmX Learn is a learning platform for understanding programming, AI, and related technical subjects through written lessons, interactive visualizations, worked examples, and short practice exercises.

It is **not a video-course platform** and should not be designed around gamified XP, streaks, quests, or reward loops. The primary reward is understanding a concept and being able to apply it independently.

The platform should help learners:
- Read clear, structured lessons with complete explanations.
- Understand abstract concepts through diagrams, animations, and interactive visual models.
- Study worked examples and see how they behave.
- Complete small practice exercises as they progress.
- Ask an AI tutor questions using the context of the curriculum and current lesson.
- Practice independently during assessments, DSA challenges, and projects.
- Track meaningful learning progress and compare performance through a carefully designed leaderboard.

### Core principles

1. **Teach, don't just present.** Every lesson should explain concepts in text and support them with useful examples or visuals.
2. **Visualize what is hard to imagine.** Use diagrams, step-by-step traces, animations, and interactive models when they improve understanding.
3. **Practice in small steps.** Place short exercises near the concepts they reinforce.
4. **AI supports learning, not answer-copying.** Give hints, explanations, questions, and debugging guidance appropriate to the activity's rules.
5. **Protect independent work.** The AI tutor must respect assessment, DSA, and project restrictions.
6. **No fake engagement mechanics.** Do not add XP, streaks, loot, quests, or badges by default.
7. **Accessibility and clarity first.** Content must remain readable, responsive, keyboard-accessible, and understandable without relying on color or motion.

### Brand rule

The cinematic globe may be used on the marketing hero. The learning dashboard and lesson experience should be quieter, more tactile, and more focused.

---

## 2. Learning experience

### Standard lesson structure

A lesson should use a repeatable structure while allowing the content author to choose the right presentation for the concept.

1. **Learning goals** — short and specific outcomes.
2. **Concept introduction** — clear written explanation, definitions, and context.
3. **Visual explanation** — a diagram, animation, interactive visualization, or step-by-step model when useful.
4. **Worked example** — code or a concrete example with a clear explanation of each important step.
5. **Try it yourself** — a small practice question, prediction, trace, or code task.
6. **Common mistakes** — relevant misconceptions and how to recognize them.
7. **Knowledge check** — short questions that test understanding.
8. **Summary** — key points and links to prerequisite or next concepts.

Do not force every lesson to contain every element. Choose elements based on the learning objective. Avoid long walls of text, but do not oversimplify explanations.

### Content types

Support a combination of:
- Structured text and headings.
- Syntax-highlighted code examples.
- Diagrams and flowcharts.
- Step-by-step execution traces.
- Interactive visualizations.
- Tables and comparison views.
- Small quizzes and prediction questions.
- Short coding exercises where execution is supported.
- Project briefs, requirements, and evaluation rubrics.

The curriculum source repository remains the source of truth for existing material. New visualizations, exercises, and supporting explanations should extend that material without silently changing its meaning.

---

## 3. Interactive visualizations

Visualizations are a core product capability, not decorative illustrations.

Examples:
- **Python basics:** variable and memory diagrams, expression evaluation, type conversions.
- **Conditions:** branching flowcharts and path tracing.
- **Loops:** iteration-by-iteration traces, loop counters, and state changes.
- **Functions:** call-stack diagrams, arguments, return values, and scope.
- **Recursion:** call-stack progression and base-case behavior.
- **Data structures:** array, linked-list, stack, queue, tree, and graph operations.
- **Algorithms:** sorting steps, binary search, graph traversal, and algorithm traces.
- **OOP:** object relationships, class instances, and method calls.
- **GenAI:** token flow, embeddings, retrieval, context windows, and simplified model pipelines.

### Visualization rules

- Directly support the current learning objective.
- Show what changes at each step.
- Provide labels, legends, controls, and concise explanations.
- Support keyboard interaction where controls are present.
- Respect reduced-motion preferences.
- Offer a textual explanation or equivalent representation when practical.
- Do not use motion solely to decorate a page.
- Do not claim a simplified visualization fully represents the underlying runtime or model.

---

## 4. Practice, assessments, DSA, and projects

### Small lesson practice

Short practice tasks can appear inside or directly after a lesson. They may ask learners to predict output, trace code, identify an error, explain a concept, or write a small piece of code.

Explain mistakes constructively and allow retries where appropriate.

### Independent assessments

During explicitly marked independent assessments, the AI tutor must not provide the answer or complete the task. Make the rules clear before the assessment begins.

### DSA practice and coding challenges

- Provide a dedicated coding workspace for DSA challenges and activities that require it.
- Keep the workspace focused on the problem statement, constraints, examples, editor, test results, and submission status.
- Use hints and progressive guidance only when allowed by the challenge policy.
- Do not expose full solutions through the AI tutor during a restricted attempt.
- The editor and execution environment must have explicit security boundaries; never execute untrusted learner code directly on the application server.
- Define execution limits, test isolation, timeouts, and resource limits before enabling a production code runner.

### Projects

Projects should teach learners to plan, implement, test, and explain their own work.

Provide a clear brief, requirements, milestones, evaluation criteria, and optional hints. For independent project work, AI can explain concepts, ask guiding questions, help interpret error messages, and review learner-provided code within the allowed policy. It must not silently build the entire project for the learner.

### Coding environment policy

Do not add a full code editor to every lesson by default. Use compact code examples and lightweight practice controls where appropriate. Reserve the full editor for DSA and other tasks that genuinely require coding, as determined by the product specification.

If learners are asked to run code locally, provide clear setup instructions. Do not assume every learner has the same operating system, editor, or package manager.

---

## 5. AI tutor

The AI tutor is a contextual learning assistant, not an unrestricted answer generator.

### Context the tutor should receive

Subject to privacy and access controls, provide only context needed for the current request, including:
- Current course, module, and lesson.
- Relevant lesson text, examples, and learning objectives.
- Relevant curriculum source material retrieved for the question.
- The learner's question and recent conversation.
- Relevant practice instructions and restrictions.
- Learner progress or prior mistakes only when useful and authorized.
- The activity policy specifying whether hints, code review, or direct answers are allowed.

Use retrieval and explicit context assembly rather than sending the entire curriculum or every user record to the model on every request.

### Tutor behavior

The tutor should:
- Explain concepts using the current curriculum's terminology and examples.
- Ground answers in relevant lesson content where possible.
- Identify uncertainty and avoid inventing curriculum facts.
- Ask clarifying questions when needed.
- Give progressively more specific hints for practice.
- Help learners reason through bugs rather than immediately replacing their work.
- Link learners back to the relevant lesson section.
- Respect activity restrictions and never reveal a restricted solution.
- Never claim access to content or user data that was not provided.

### Limited daily usage

AI access should have a configurable daily usage allowance. The actual quota, reset time, and any future paid entitlement must be decided explicitly; do not invent limits in the UI.

The product should:
- Show remaining usage in clear, non-alarming language.
- Explain when the allowance resets.
- Let learners continue reading and doing non-AI practice when the allowance is exhausted.
- Enforce usage on the server; do not rely on client-side quota checks.
- Apply per-user and per-session rate limits.
- Avoid storing sensitive information in model traces unnecessarily.

The core curriculum must not require AI to complete.

---

## 6. Leaderboard

A leaderboard may be included, but it should support learning rather than encourage spam or unhealthy competition.

- Rank using a clearly documented, meaningful measure such as verified challenge completion, assessment performance, or project milestones.
- Do not rank users solely by time spent, number of AI prompts, or repeated trivial actions.
- Explain how ranking is calculated.
- Do not display fabricated users, scores, testimonials, or metrics.
- Provide a privacy-conscious display name and an appropriate way to opt out where feasible.
- Avoid exposing personal data, email addresses, private project details, or private learning history.
- Consider weekly or topic-based views rather than only a permanent global ranking.
- Make the leaderboard an optional destination, not the dashboard's main focus.

The scoring model and whether the leaderboard is global, weekly, course-based, or opt-in remain undecided until explicitly approved.

---

## 7. Visual design system

### Direction: Paper & Graphite

Use a minimal, editorial visual system with tactile light surfaces and layered charcoal dark surfaces. The UI should feel focused and professional rather than futuristic or game-like.

**Light theme**
- Warm off-white canvas.
- Near-white reading surfaces.
- Charcoal text.
- Fine neutral borders.
- Restrained blue for actions and active states.
- Very subtle monochrome paper texture on the page canvas only.

**Dark theme**
- Charcoal canvas, not pure black.
- Slightly lighter panels and nested surfaces.
- Soft neutral text.
- Delicate borders.
- Blue for actions, focus, links, and active progress.
- Primarily clean surfaces; texture is optional and must remain nearly imperceptible.

Do not use emojis in product UI. Avoid purple gradients, giant glowing blobs, excessive glassmorphism, heavy shadows, neon accents everywhere, and repetitive card grids.

### Color tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `background` | `#F3F0E8` | `#202124` | Page canvas |
| `foreground` | `#282A2D` | `#F1F0EC` | Primary text |
| `surface` | `#FFFEFA` | `#292B30` | Cards and panels |
| `surface-secondary` | `#EAE6DD` | `#32343A` | Nested surfaces |
| `border` | `#D9D4CA` | `#41434A` | Dividers and outlines |
| `muted` | `#66655F` | `#B2B3B7` | Secondary text |
| `subtle` | `#817D74` | `#94969D` | Metadata |
| `primary` | `#1769C2` | `#58A8FF` | Actions and active states |
| `primary-hover` | `#12559E` | `#80BDFF` | Hover state |
| `primary-foreground` | `#FFFFFF` | `#111C2A` | Text on primary actions |
| `primary-soft` | `#DCEBFA` | `#253548` | Selected backgrounds |
| `success` | `#18794E` | `#57C997` | Successful completion |
| `warning` | `#925D12` | `#E8B76B` | Warnings |
| `error` | `#B42332` | `#FF7A83` | Errors |
| `info` | `#1769C2` | `#80BDFF` | Informational state |

All color pairs must be contrast-tested before release. Do not rely on color alone to communicate meaning.

### Typography

- **Schibsted Grotesk:** display headings and important page titles.
- **Inter:** body text, interface labels, forms, navigation, and lesson prose.
- **JetBrains Mono:** code, technical labels, and execution output.

| Style | Size | Weight | Line height |
|---|---:|---:|---:|
| Marketing hero | 56–72 px | 600–700 | 1.05–1.12 |
| Page heading | 32–40 px | 600 | 1.15 |
| Section heading | 24–28 px | 600 | 1.2 |
| Card heading | 16–18 px | 600 | 1.35 |
| Body | 15–16 px | 400–500 | 1.6 |
| Small text | 13–14 px | 400–500 | 1.5 |
| Metadata | 12 px minimum | 500 | 1.4 |
| Code | 13–15 px | 400 | 1.65 |

Avoid oversized headings throughout the learning app. Lesson readability is more important than decorative typography.

### Layout and shape

- Main content container: approximately 1200–1280 px maximum width.
- Desktop gutters: 32–48 px.
- Mobile gutters: 16–20 px.
- Card padding: 16–24 px.
- Marketing section spacing: 64–96 px.
- Learning app section spacing: 32–48 px.
- Card radius: 10–14 px.
- Buttons and inputs: 8–10 px radius.
- Use pill shapes only for compact filters or statuses.
- Keep borders subtle and shadows restrained.

Use a 4 px base spacing scale: 4, 8, 12, 16, 24, 32, 48, and 64 px.

### Motion

- Short interactions: generally 150–220 ms.
- Animate only when communicating state, causality, or feedback.
- Respect `prefers-reduced-motion`.
- Do not make essential content dependent on motion.
- Avoid constant movement, animated backgrounds, and reward animations that interrupt learning.

---

## 8. Accessibility and responsive behavior

- Meet WCAG AA contrast targets: 4.5:1 for normal text and 3:1 for large text and relevant UI boundaries.
- Ensure controls are keyboard-operable and have visible focus.
- Use semantic HTML and a logical heading hierarchy.
- Provide accessible labels and announcements for validation errors and practice results.
- Prefer touch targets around 44 × 44 px where practical.
- Ensure diagrams have labels and a text equivalent where practical.
- Respect reduced-motion settings.
- Avoid horizontal overflow on mobile, especially in code examples and tables.
- Test lesson reading, code examples, forms, navigation, and visualizations at narrow widths.

---

## 9. Core components

Build reusable components with explicit states and semantic tokens.

### Foundations
- Button
- Input and textarea
- Select and checkbox
- Card and panel
- Badge and status label
- Progress indicator
- Tooltip and popover
- Dialog and confirmation
- Tabs and navigation
- Skeleton and empty state
- Alert and inline validation

### Learning components
- Course/module navigation
- Lesson content block
- Code example
- Diagram or visualization container
- Worked example
- Practice question
- Knowledge check
- Hint panel
- Assessment instructions
- Project brief and rubric
- DSA problem statement
- Code editor workspace (only for tasks that need it)
- Test result and submission status

### AI components
- AI tutor panel
- Context/source references when available
- Message composer and conversation history
- Hint and explanation states
- Usage allowance indicator
- Limit-reached state
- Restricted-assessment state

### Leaderboard components
- Ranking table or list
- Time-period selector if supported
- Privacy/display-name treatment
- Current-user position
- Empty and loading states

Every component must define default, hover, focus-visible, active, disabled, loading, empty, success, and error states where applicable. Do not add irrelevant states to components that do not need them.

---

## 10. Recommended information architecture

Suggested top-level destinations:

- **Learn:** courses, modules, lessons, and learning progress.
- **Practice:** short exercises, knowledge checks, and topic practice.
- **DSA:** dedicated challenge workspace and submissions.
- **Projects:** briefs, milestones, rubrics, and learner work.
- **AI Tutor:** contextual help with usage allowance.
- **Leaderboard:** meaningful, privacy-conscious performance comparisons.
- **Profile / Settings:** preferences, theme, privacy, and account details.

The dashboard should prioritize continuing a lesson, the current learning path, relevant practice, and clear progress. Do not make an AI prompt box or leaderboard the dominant element.

---

## 11. Technical implementation principles

- Use Next.js App Router, TypeScript, and Tailwind CSS v4 in accordance with the current project setup.
- Use CSS custom properties as the source of truth for semantic theme tokens and map them through `@theme inline`.
- Preserve existing font loading and root theme initialization when integrating tokens.
- Avoid hardcoded theme-specific colors in feature components.
- Use the existing approved component library and icon system; ask before adding packages.
- Keep components focused and maintain the repository's established component-size limit.
- Keep content retrieval and learner progress separate from presentation components.
- Enforce AI usage limits and assessment policies on the server.
- Validate progress and submission events on the server.
- Never execute untrusted learner code directly on the main application server.
- Do not send the entire curriculum or all learner records to the model; retrieve and assemble relevant context.
- Avoid logging unnecessary private learner content in model traces.
- Do not fabricate metrics, users, testimonials, scores, or learning outcomes.

### Content source

The public `istmX/Python` repository is the source of truth for existing curriculum. Import content idempotently and preserve source paths and attribution where appropriate. Extend the material with visualizations, worked examples, and practice while retaining the original meaning.

Do not confuse `basic-python/07-mini-ai-assistant/` with the Gemini-powered project under `GENAI/projects/`; they are distinct learning materials.

---

## 12. AI activity policy

Each activity should declare a policy describing what the AI is allowed to do.

| Activity | Default AI behavior |
|---|---|
| Reading a lesson | Explain, clarify, give relevant examples |
| Understanding a visualization | Explain the steps and answer contextual questions |
| Small practice | Offer hints and reasoning; reveal the answer only if the activity permits it |
| Knowledge check | Follow the configured assessment policy |
| Restricted assessment | No direct answers or solution generation |
| DSA challenge | Progressive hints only when allowed; no full solution during restricted attempts |
| Independent project | Explain concepts, help interpret errors, and review learner-provided work within policy |
| General learning question | Answer using relevant curriculum context when available |

The policy must be enforced by server-side logic, not merely by prompt instructions or hidden client controls.

---

## 13. Quality checklist

- [ ] Light and dark themes both work.
- [ ] Colors use semantic tokens.
- [ ] Text and relevant UI boundaries pass contrast checks.
- [ ] Keyboard focus is visible and controls are operable.
- [ ] Reduced-motion preferences are respected.
- [ ] Layout works on mobile.
- [ ] Loading, empty, error, and success states are handled.
- [ ] Lesson content is accurate and understandable without AI.
- [ ] Visualizations directly support the learning objective.
- [ ] Practice feedback helps learners understand mistakes.
- [ ] AI behavior respects the activity's policy.
- [ ] AI limits are enforced on the server.
- [ ] No fabricated metrics, users, testimonials, or scores are shown.
- [ ] Learner code is not executed unsafely on the application server.
- [ ] No unapproved dependency or unrelated logic change was introduced.

---

## 14. Decisions still requiring explicit definition

Do not invent these values or present them as finalized requirements:

- Daily AI allowance and reset time.
- Whether AI usage will have paid tiers.
- Leaderboard scoring formula, scope, and opt-out behavior.
- Which challenges run code in-browser or on isolated infrastructure.
- Exact assessment policies for each course and challenge.
- Data retention policy for tutor conversations and traces.
- Final course and visualization coverage beyond the existing source curriculum.

---

## Final design principle

**Teach the concept, visualize the difficult part, let the learner practice, and use AI to help them think—not to do the learning for them.**

Every visual element and product feature should support that sequence.
