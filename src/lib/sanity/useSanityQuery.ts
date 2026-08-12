import { useEffect, useState } from 'react';
import { sanityClient } from './client';

export interface QueryState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Runs a GROQ query and tracks loading/error state.
 *
 * `params` is compared by value, not identity, so callers can pass an inline
 * object literal without re-fetching on every render.
 */
export function useSanityQuery<T>(query: string, params: Record<string, unknown> = {}): QueryState<T> {
  const [state, setState] = useState<QueryState<T>>({ data: null, loading: true, error: null });
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    sanityClient
      .fetch<T>(query, JSON.parse(paramsKey))
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        console.error('[sanity] query failed', error);
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      });

    return () => {
      cancelled = true;
    };
  }, [query, paramsKey]);

  return state;
}
