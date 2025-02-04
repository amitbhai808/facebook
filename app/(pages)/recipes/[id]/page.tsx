import { notFound } from 'next/navigation';
import { recipes } from '@/data/recipies';

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
    const recipe = recipes.find(r => r.id === Number(params.id));

    if (!recipe) return notFound();

    return (
        <div className="bg-gray-50 py-8">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <article className="rounded-lg bg-white p-6 shadow-lg">
                    {/* Header Section */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">{recipe.name}</h1>
                        <div className="mt-2 flex items-center gap-4 text-gray-600">
                            <span>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</span>
                            <span>•</span>
                            <span>{recipe.cuisine} Cuisine</span>
                            <span>•</span>
                            <span>Serves {recipe.servings}</span>
                        </div>
                    </header>

                    {/* Main Content */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Image */}
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="h-72 w-full rounded-lg object-cover"
                        />

                        {/* Details */}
                        <div className="space-y-6">
                            {/* Time and Nutrition */}
                            <div className="rounded-lg bg-gray-50 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Prep Time</p>
                                        <p className="font-medium">{recipe.prepTimeMinutes} mins</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Cook Time</p>
                                        <p className="font-medium">{recipe.cookTimeMinutes} mins</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Difficulty</p>
                                        <p className="font-medium">{recipe.difficulty}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Calories</p>
                                        <p className="font-medium">{recipe.caloriesPerServing}/serving</p>
                                    </div>
                                </div>
                            </div>

                            {/* Ingredients */}
                            <div>
                                <h2 className="mb-3 text-xl font-semibold">Ingredients</h2>
                                <ul className="list-inside list-disc space-y-1">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="text-gray-700">{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="mb-4 text-xl font-semibold">Instructions</h2>
                        <ol className="list-inside list-decimal space-y-2">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="text-gray-700">{step}</li>
                            ))}
                        </ol>
                    </div>
                </article>
            </div>
        </div>
    );
}