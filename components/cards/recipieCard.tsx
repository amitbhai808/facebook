import Link from 'next/link';
import { Recipe } from '@/types/recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link
            href={`/recipes/${recipe.id}`}
            className="group relative block h-full rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg"
        >
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-t-lg">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
            </div>

            <div className="p-4">
                <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                        {recipe.cuisine}
                    </span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <span>⭐ {recipe.rating}</span>
                    <span>•</span>
                    <span>{recipe.difficulty}</span>
                    <span>•</span>
                    <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                    {recipe.tags.map(tag => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}