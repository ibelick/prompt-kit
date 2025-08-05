# Contributing

Thank you for your interest in contributing to prompt-kit. Whether you are fixing a bug, adding a new feature, or improving documentation, your contributions are valuable.

## 1. Types of Contributions

We accept contributions in the following areas:

### Components

- What: UI-only components for AI applications (e.g., loaders, message container, prompt-input).
- Details: Purely UI, no backend logic.
- Examples: Check `/components/prompt-kit` for inspiration.

### Blocks

- What: Pre-built UI blocks using `shadcn/ui` and `prompt-kit`.
- Details: Full UI, like a chatbot interface.
- Examples: See `/components/blocks for` reference.

### Primitives

- What: Full-stack building blocks combining UI and a working API route.
- Details: Uses `AI SDK` for backend routes. Include a demo UI and API route for testing.
- Examples: Explore `/components/primitives` and `/app/api/primitives` (e.g., chatbot or tool-calling).

## 2. Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or your preferred package manager)
- Familiarity with React, TypeScript, and Vercel AI SDK (for primitives).

### Setting Up the Project

1. Fork the repository on GitHub.
2. Clone your fork: `git clone https://github.com/ibelick/prompt-kit.git`
3. Install dependencies: `pnpm install`
4. Run the development server: `pnpm dev`
5. For primitives, set up an OpenAI API key in localStorage for testing (see `/components/primitives/demo`).

### Folder Structure

- `/components/prompt-kit`: UI components
- `/components/blocks`: Block UI
- `/components/primitives`: UI for primitives
- `/app/api/primitives`: Backend routes for primitives
- `/components/primitives/demo`: Demo UI for primitives
- `/app/api/primitives/demo`: Demo API routes

## 3. How to Contribute

1. Choose a contribution type: Pick a component, block, or primitive based on your skills and interests.
2. Check existing examples: Use examples in the relevant folders as a reference.
3. Follow Coding Standards:

- Use TypeScript for type safety.
- Follow the existing code style (e.g., Prettier, ESLint).
- Write clear, concise documentation for your code.
- For primitives, include a demo UI and API route for testing.

4. Test Your Changes:

- Ensure your component/block/primitive works locally.
- For primitives, verify the API route works with the demo UI.

5. Submit a Pull Request:

- Fork the repo and create a branch: `git checkout -b feature/your-feature-name`
- Commit your changes with clear messages: `git commit -m "Add new chat input component"`
- Push to your fork: git push origin feature/your-feature-name
- Open a PR with a clear title and description, including:
  - What you added/changed.
  - A minimal demo preview (e.g., screenshot or short video).
  - Any relevant issue numbers (if applicable).

## 4. Need Help?

Have an idea, feature request, or need assistance? Reach out to us:

- X: DM [@ibelick](https://x.com/ibelick).
- GitHub issues: Open an issue for questions or suggestions.

We are here to support you and make contributing a smooth experience.
