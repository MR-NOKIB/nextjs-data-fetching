import Link from "next/link";
import MealsSearchInput from "./components/MealsSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
})


export const metadata = {
    title: "All Meals",
    keywords: ['Next.js', 'React', 'JavaScript', 'Learning', 'PlayGround'],
    description: "Meals Loaded From Meals Db Api",
};

export default async function MealPage({ searchParams }) {
    const search = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.search}`);
            const data = await res.json();
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const meals = await fetchMeals();

    return (
        <div className={`${roboto.className}`}>
            <div className="flex justify-center w-full">
                <MealsSearchInput />
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
                {meals?.map(meal => (
                    <div key={meal.idMeal} className="mb-6 break-inside-avoid border p-6 rounded-2xl">
                        <Image src={meal.strMealThumb} width={641} height={641} alt={meal.strMeal} />
                        <p>{meal?.strMeal}</p>
                        <p>{meal?.strInstructions}</p>
                        <Link href={`/meals/${meal.idMeal}`}>Details</Link>
                    </div>
                ))}
            </div>

        </div>

    )
}
