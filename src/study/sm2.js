const INTERVAL_DAYS = {
  again: 0,
  hard: 1,
  good: 3,
  easy: 7,
};

export function rate(card, rating) {
  if (!(rating in INTERVAL_DAYS)) {
    throw new Error(`Unknown rating: ${rating}`);
  }

  const next = new Date();
  next.setDate(next.getDate() + INTERVAL_DAYS[rating]);

  card.nextReview = next.toISOString().slice(0, 10);
  card.lastRating = rating;
  card.ratedAt = new Date().toISOString();
  return card;
}

export function isDue(card, today = new Date().toISOString().slice(0, 10)) {
  if (!card.nextReview) return true;
  return card.nextReview <= today;
}
