

const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export async function generateMetadata({ params }) {
    // read route params
    const id = (await params).id;

    // fetch data
    const [singleMeal] = await fetchSingleMeal(id);
    console.log(singleMeal);


    return {
        title: singleMeal.strMeal,
        description: singleMeal.strInstruction,
    }
}
export default async function SingleMealPage({ params }) {
    const p = await params;

    const meal = await fetchSingleMeal(p.id);

    return (
        <div>
            {JSON.stringify(meal)}
        </div>
    )
}
