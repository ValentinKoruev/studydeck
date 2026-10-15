const STORAGE_KEY_PREFIX = 'studydeck:draft:';

export function saveDraft(cardId, draft) {
  const payload = JSON.stringify({ draft, savedAt: Date.now() });
  localStorage.setItem(STORAGE_KEY_PREFIX + cardId, payload);
}

export function loadDraft(cardId) {
  const raw = localStorage.getItem(STORAGE_KEY_PREFIX + cardId);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDraft(cardId) {
  localStorage.removeItem(STORAGE_KEY_PREFIX + cardId);
}

export function attachBeforeUnloadGuard(isDirty) {
  const handler = (e) => {
    if (isDirty()) {
      e.preventDefault();
      e.returnValue = '';
    }
  };
  window.addEventListener('beforeunload', handler);
  return () => window.removeEventListener('beforeunload', handler);
}
