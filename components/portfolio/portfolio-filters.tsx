'use client';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SortOption = 'newest' | 'oldest' | 'az';

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

export function PortfolioFilters({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6">
      {/* Category pills — options come from `categories` in data/portfolio.ts */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              activeCategory === cat
                ? 'border-accent bg-accent text-bg'
                : 'border-line text-ink-muted hover:border-ink-muted hover:text-ink'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="w-full rounded-full border border-line bg-bg-surface py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink-faint focus:border-accent"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-ink-muted">
          Sort by
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="rounded-full border border-line bg-bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A–Z</option>
          </select>
        </label>
      </div>
    </div>
  );
}
