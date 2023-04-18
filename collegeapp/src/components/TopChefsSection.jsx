import ChefsCard from "./ChefsCard";

export default function TopChefsSection() {
  const chefs = [
    {
      name: "Fivel Stewart",
      img: "/images/topchefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Chinese",
    },
    {
      name: "Patrick Bateman",
      img: "/images/topchefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "Mexican",
    },
    {
      name: "Mathew Murdock",
      img: "/images/topchefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Keira Knightley",
      img: "/images/topchefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Joe Goldberg",
      img: "/images/topchefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Daisy Edgar-Jones",
      img: "/images/topchefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs:</h1>
      <div className="top-chefs-container">
        {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
        {chefs.map((chef) => (
          <ChefsCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
