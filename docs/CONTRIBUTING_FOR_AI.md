# Contributing for AI-Assisted Workflows

This guide is optimized for non-coders and AI copilots.

## Goal

Let contributors describe desired behavior in plain language, then have AI implement targeted edits safely.

## How to create an AI task

Use this template in issues/notes:

1. **Outcome:** What should users see?
2. **Acceptance Criteria:** 3-5 specific checks.
3. **Files likely affected:** exact paths if known.
4. **Non-goals:** what must not change.

### Example prompt

"In `apps/web`, improve the ETA card readability for mobile. Keep current colors. Add clearer labels for distance and aerial time range."

## Safe boundaries for AI edits

- UI changes: `apps/web/src`
- Parser & socket logic: `apps/backend/src`
- Shared schema: `packages/shared-types/src`

If schema changes are needed:
1. Update shared types first.
2. Then update backend.
3. Then update web.

## Review checklist (for Jessica)

- Does it match the requested outcome?
- Did AI touch unrelated files?
- Are labels plain and understandable?
- Is safety disclaimer still visible?
