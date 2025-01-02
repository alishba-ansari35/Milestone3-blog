import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Chicken Tikka Biryani !",
      description: "Biryani isn't just a dish; it's a celebration of spices, culture, and love in every bite.A bowl of biryani holds the richness of a culture, the warmth of a family, and the joy of sharing.",
      date: "2024-12-31",
      image: "/images/pic.png",
    },
    {
      id: "2",
      title: "Chicken Karhai !",
      description: "Karahi is not just a dish; it's a celebration of bold flavors and the warmth of home-cooked meals.In a Karahi, every bite tells a story of spices, tradition, and the joy of shared meals.",
      date: "2024-12-31",
      image: "/images/pic1.png",
    },
    {
      id: "3",
      title: "Fruit Custard !",
      description: "A bowl of fruit custard is not just a treat; it is a colorful celebration of natures finest flavors in one creamy, indulgent dish.Every spoonful of fruit custard is a smile",
      date: "2024-12-31",
      image: "/images/pic3.png",
    },
    {
      id: "4",
      title: "Chicken Tandori Tikka !",
      description: "Chicken Tikka is not just a dish it is a celebration of bold flavors and fiery passion.When spices and chicken come together magic happens Chicken Tikka is the proof .",
      date: "2024-12-31",
      image: "/images/pic4.png",
    },
    {
      id: "5",
      title: "Chicken Chowmein Resturant Style !",
      description: "A bowl of Chicken Chowmein is all you need to satisfy your cravings for something tasty and satisfying.One bowl of Chicken Chowmein endless satisfaction.",
      date: "2024-12-31",
      image: "/images/pic5.png",
    },
    {
      id: "6",
      title: "Beef Shami Kabab !",
      description: "A bite of Beef Kabab is a celebration of rich savory goodness with every mouthful.Beef Kababs are not just food they are a flavorful experience  you can savor.",
      date: "2024-12-31",
      image: "/images/pic6.png",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 ">
      Exploring The Food and Recipe Blog Posts : {" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 1 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
