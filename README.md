# StudyDeck

A flashcard web app for university students that uses spaced repetition to help memorize concepts for exams.

## What it is

StudyDeck lets a student turn their notes into flashcards, group the cards into decks per subject, and then study each deck through a short daily review session. After each card, the student rates how well they recalled it, and the app schedules the next review using a simple SM-2 style spaced-repetition algorithm — so each concept comes back exactly when it is about to be forgotten.

## Who it is for

University students preparing for exams who want to replace passive re-reading of notes with active recall, without the overhead of a full-featured app like Anki.

## What problem it solves

Students waste a lot of study time re-reading the same notes, which feels productive but has poor retention. StudyDeck forces active recall (hiding the answer, then revealing it after the student has committed to a guess) and uses spaced repetition to spread reviews out optimally, so the same hour of study produces measurably more remembered material.

## Project status

Early scaffolding. See `docs/specs/` for per-feature specifications. Development follows a Kanban process tracked in Jira (project key: `SP`). Every branch and pull request corresponds to a `SP-<N>` ticket.

## Repository conventions

- One ticket, one branch, one pull request.
- Branch naming: `SP-<N>-<kebab-slug>` (e.g., `SP-3-create-deck`).
- Commit messages start with the ticket key: `SP-3: add deck spec`.
- Pull request titles start with the ticket key: `SP-3: Create deck`.
- `main` is protected: after the initial commit, every change lands via pull request.

## License

Coursework for *Software Processes*, 2026/27. Not currently licensed for external use.
