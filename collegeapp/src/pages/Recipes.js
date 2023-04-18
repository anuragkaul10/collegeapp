import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "White Sauce Pasta",
      image: "/images/recipes/11.jpg",
      authorImg: "/images/topchefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/images/recipes/12.jpg",
      authorImg: "/images/topchefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/images/recipes/13.jpg",
      authorImg: "/images/topchefs/img_3.jpg",
    },
    {
      title: "Chocolate soufflé",
      image: "/images/recipes/14.jpg",
      authorImg: "/images/topchefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/images/recipes/15.jpg",
      authorImg: "/images/topchefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/images/recipes/16.jpg",
      authorImg: "/images/topchefs/img_1.jpg",
    },
    {
      title: "Spanish Tortilla",
      image: "/images/recipes/17.jpg",
      authorImg: "/images/topchefs/img_2.jpg",
    },
    {
      title: "Pancakes",
      image: "/images/recipes/18.jpg",
      authorImg: "/images/topchefs/img_3.jpg",
    },
    {
      title: "Napoletana Pizza",
      image: "/images/recipes/19.jpg",
      authorImg: "/images/topchefs/img_5.jpg",
    },
    {
      title: "Dal Makhni",
      image: "/images/recipes/20.jpg",
      authorImg: "/images/topchefs/img_6.jpg",
    },
    {
      title: "Risotto",
      image: "/images/recipes/21.jpg",
      authorImg: "/images/topchefs/img_3.jpg",
    },
    {
      title: "Salade Niçoise",
      image: "/images/recipes/22.jpeg",
      authorImg: "/images/topchefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RecipeCard /> */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
