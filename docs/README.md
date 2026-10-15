# StudyDeck — design docs

Each feature in StudyDeck has a short spec in `docs/specs/`, named after its Jira ticket (e.g., `SP-3-create-deck.md`). Bug reports and fix notes live in `docs/bugfixes/`.

A spec is intentionally one page — it captures the user story, acceptance criteria, a sketch, and known edge cases. The code (when it lands) is expected to be small; the spec is the contract.

## Index

Specs appear here as features are picked up:

- `specs/SP-3-create-deck.md` — create a deck
- `specs/SP-4-add-flashcard.md` — add a flashcard
- `specs/SP-5-edit-delete-flashcard.md` — edit and delete flashcards
- `specs/SP-6.1-csv-parse.md` … `SP-6.4-csv-commit.md` — CSV import pipeline
- `specs/SP-8-study-session.md` — run a study session
- `specs/SP-9-recall-rating.md` — rate recall + spaced repetition
- `bugfixes/SP-14-edit-refresh.md` — unsaved-edit loss on refresh
