export const deep_redact = (obj: Record<string, unknown>, paths: string[], mask = '***') => {
  const paths_set = new Set(paths);
  const redacted_obj: Record<string, unknown> = {};

  for (const k of Object.keys(obj)) {
    if (paths_set.has(k)) {
      redacted_obj[k] = mask;
    } else {
      if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
        redacted_obj[k] = deep_redact(obj[k] as Record<string, unknown>, paths, mask);
      } else {
        redacted_obj[k] = obj[k];
      }
    }
  }

  return redacted_obj;
};
