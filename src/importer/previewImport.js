export function buildPreview(validatedRows, limit = 10) {
  return {
    rows: validatedRows.slice(0, limit),
    totalRows: validatedRows.length,
    truncated: validatedRows.length > limit,
  };
}
