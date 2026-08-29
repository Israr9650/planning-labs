// Helper utility functions for Planning Labs prototype

/**
 * Filter items by query string across title, category, description fields.
 */
export function filterByQuery<T extends Record<string, any>>(
  items: T[],
  query: string,
  fields: (keyof T)[]
): T[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return items.filter((item) =>
    fields.some((field) => {
      const val = item[field];
      if (typeof val === "string") {
        return val.toLowerCase().includes(q);
      }
      return false;
    })
  );
}

/**
 * Lightweight conversion event tracker logger.
 */
export function trackEvent(eventName: string, metadata?: Record<string, any>) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event Tracked]: ${eventName}`, metadata || {});
  }
}
