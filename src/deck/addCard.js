export function addCard(deck, front, back, tags = []) {
  if (!front || !back) {
    throw new Error('Both front and back are required');
  }

  const card = {
    id: Math.random().toString(36).slice(2, 10),
    front,
    back,
    tags,
    createdAt: new Date().toISOString(),
    nextReview: new Date().toISOString().slice(0, 10),
    lastRating: null,
  };

  deck.cards.push(card);
  return card;
}
