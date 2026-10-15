export function createSession(deck) {
  const today = new Date().toISOString().slice(0, 10);
  const dueCards = deck.cards.filter((c) => !c.nextReview || c.nextReview <= today);

  return {
    deckId: deck.id,
    cards: dueCards,
    currentIndex: 0,
    flipped: false,
    startedAt: new Date().toISOString(),
  };
}

export function currentCard(session) {
  return session.cards[session.currentIndex] ?? null;
}

export function flip(session) {
  session.flipped = !session.flipped;
  return session;
}

export function next(session) {
  session.currentIndex++;
  session.flipped = false;
  return session;
}

export function isComplete(session) {
  return session.currentIndex >= session.cards.length;
}

export function progress(session) {
  return {
    current: Math.min(session.currentIndex + 1, session.cards.length),
    total: session.cards.length,
  };
}
