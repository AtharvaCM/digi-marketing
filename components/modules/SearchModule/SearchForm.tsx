'use client';

import { VscSearch } from 'react-icons/vsc';

import resolveUrl from '@/lib/resolveUrl';
import { cn, debounce } from '@/lib/utils';
import { count } from '@/sanity/utils';

import css from './SearchForm.module.css';
import SearchGoogle from './SearchGoogle';
import { handleSearch, SearchScope, searchStore, useQuery } from './store';

/**
 * @note Remember to wrap this component in a Suspense
 */
export default function SearchForm({
  className,
  scope,
  path,
  ...props
}: Partial<{
  scope: SearchScope;
  path: string;
}> &
  React.ComponentProps<'search'>) {
  const { query, setQuery } = useQuery();
  const { results, setResults } = searchStore();

  return (
    <search className={cn(css.root, 'relative', className)} {...props}>
      <label className="input focus-within:border-ink/50 relative z-[2] flex items-center gap-2 rounded">
        <VscSearch />

        <input
          className="grow outline-none"
          name="query"
          type="search"
          placeholder={scope !== 'all' ? `Search ${scope === 'path' ? 'pages' : scope}` : 'Search'}
          defaultValue={query}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={debounce((e: any) =>
            handleSearch({
              query: e.target.value,
              scope,
              path,
              setQuery,
              setResults,
            }),
          )}
        />
      </label>

      {query && (
        <div className={cn(css.results, 'anim-fade-to-b absolute inset-x-0 top-full z-[1]')}>
          <div className="frosted-glass bg-canvas border-ink/10 mt-1 max-h-[20em] space-y-2 overflow-y-auto rounded border py-2 shadow-md *:px-3">
            <p className="text-ink/50 text-center text-sm">
              <span className="line-clamp-1">
                {count(results, 'result')} found for <output>&qout;{query}&quot;</output>
              </span>
            </p>

            {results.length > 0 && (
              <ul>
                {results.map((result) => (
                  <li key={result._id}>
                    <a className="group flex gap-2 py-px" href={resolveUrl(result, { base: false }) + `#:~:text=${query}`}>
                      <span className="line-clamp-1 grow group-hover:underline">{result.metadata.title}</span>

                      <small className="technical text-accent/50 shrink-0 text-xs">{result._type === 'blog.post' ? 'Blog' : 'Page'}</small>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <SearchGoogle query={query} scope={scope} path={path} />
          </div>
        </div>
      )}
    </search>
  );
}
