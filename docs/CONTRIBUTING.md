# Contributing (Human-Friendly)

## Ground rules

- Keep the architecture simple and contract-first.
- Any cross-app schema changes must be made in `packages/shared-types` first.
- Prefer small pull requests.

## Getting started

1. Read `docs/architecture.md`.
2. Pick one app or package.
3. Make changes in feature branches.
4. Validate with lint/typecheck.

## Coding ownership suggestion

- Backend + parser logic: primary maintainer
- Web UI and polish tasks: secondary contributor (can be AI-assisted)

## Commit conventions

Use simple scope-based messages, e.g.:

- `feat(backend): add websocket event envelope`
- `docs: add AI contributor prompts`
- `chore(repo): scaffold monorepo workspaces`
