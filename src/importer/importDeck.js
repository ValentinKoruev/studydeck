import { parseCsv } from './parseCsv.js';
import { validateRows } from './validateRows.js';
import { buildPreview } from './previewImport.js';
import { commitImport } from './commitImport.js';

export function importDeckFromCsv(fileName, text, existingDeckNames = []) {
  const rows = parseCsv(text);
  if (rows.length > 0) rows.shift();

  const { valid, skipped } = validateRows(rows);
  const preview = buildPreview(valid);

  return {
    preview,
    skipped,
    confirm: () => commitImport(fileName, valid, existingDeckNames),
  };
}
