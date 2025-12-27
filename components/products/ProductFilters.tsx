import { Search } from 'lucide-react';
import { CATEGORIES } from '@/utils/constants';

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange 
}: ProductFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/80"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-md'
                : 'bg-white/60 text-stone-600 hover:bg-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}