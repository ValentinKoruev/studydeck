export function commitImport(fileName, validatedRows, existingDeckNames = []) {
  const deckName = fileName.replace(/\.csv$/i, '');
  if (existingDeckNames.includes(deckName)) {
    throw new Error(`A deck named "${deckName}" already exists`);
  }

  const deck = {
    id: Math.random().toString(36).slice(2, 10),
    name: deckName,
    subject: null,
    cards: [],
    createdAt: new Date().toISOString(),
  };

  for (const row of validatedRows) {
    deck.cards.push({
      id: Math.random().toString(36).slice(2, 10),
      front: row.front,
      back: row.back,
      tags: row.tag ? [row.tag] : [],
      createdAt: new Date().toISOString(),
      nextReview: new Date().toISOString().slice(0, 10),
      lastRating: null,
    });
  }

  return { deck, imported: validatedRows.length };
}
