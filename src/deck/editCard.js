export function editCard(deck, cardId, { front, back, tags } = {}) {
  const card = deck.cards.find((c) => c.id === cardId);
  if (!card) {
    throw new Error(`Card ${cardId} not found in deck ${deck.id}`);
  }

  if (front !== undefined) card.front = front;
  if (back !== undefined) card.back = back;
  if (tags !== undefined) card.tags = tags;

  card.updatedAt = new Date().toISOString();
  return card;
}

export function deleteCard(deck, cardId) {
  const idx = deck.cards.findIndex((c) => c.id === cardId);
  if (idx === -1) {
    throw new Error(`Card ${cardId} not found in deck ${deck.id}`);
  }

  const [removed] = deck.cards.splice(idx, 1);
  return removed;
}
