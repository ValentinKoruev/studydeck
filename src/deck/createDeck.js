export function createDeck(name, subject, existingNames = []) {
  if (typeof name !== 'string' || name.length < 1 || name.length > 60) {
    throw new Error('Deck name must be between 1 and 60 characters');
  }
  if (existingNames.includes(name)) {
    throw new Error(`A deck named "${name}" already exists`);
  }

  return {
    id: randomId(),
    name,
    subject: subject ?? null,
    cards: [],
    createdAt: new Date().toISOString(),
  };
}

function randomId() {
  return Math.random().toString(36).slice(2, 10);
}
