"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "Chicken Tikka Biryani Recipe !",
     description: "Here is a quick and easy **Biryani** recipe: Ingredients: 1 cup basmati rice 500g chicken (cut into pieces) 1 onion (sliced) 2 tomatoes (chopped) 1/2 cup yogurt- 1 tablespoon ginger-garlic paste- 1 teaspoon garam masala- 1 teaspoon red chili powder- 1 teaspoon turmeric powder- 2 tablespoons oil- 1/2 teaspoon cumin seeds- 2-3 cloves 1 bay leaf- Salt to taste Fresh coriander and mint leaves for garnish .Instructions:1. **Cook the Rice:**   - Wash and soak basmati rice for 15-20 minutes. In a pot, boil water with a pinch of salt and cook the rice until it’s 70% done. Drain and set aside.2. **Prepare the Chicken:**   - Heat oil in a pan. Add cumin seeds, cloves, and bay leaf. Once they splutter, add sliced onions and sauté until golden brown.- Add ginger-garlic paste and chopped tomatoes. Cook until soft.- Add yogurt, garam masala, red chili powder, turmeric, and salt. Stir well. - Add the chicken pieces and cook until they are tender (about 10-15 minutes).3. **Layer the Biryani:**   - In a large pot, layer half of the cooked rice, followed by half of the chicken mixture. Repeat the layers   - Garnish with fresh coriander and mint leaves.4. **Cook on Dum (Steam):**- Cover the pot with a lid and cook on low heat for 10-15 minutes to allow the flavors to blend together.5. **Serve:**Gently fluff the biryani and serve hot with raita or a side salad . Enjoy your quick and easy homemade **Biryani**!",
    image: "/images/pic.png",
  },
  {
    id: "2",
    title: "Chicken Karhai Recipe !",
    description: "Quick & Easy Chicken Karhai Recipe Craving a flavorful  spicy dish that is quick to prepare . This easy Chicken Karhai is packed with rich flavors and perfect for any occasion. Ingredients: 500g chicken (cut into pieces) 2 tablespoons oil 1 onion (sliced) 1 tomato (chopped) 1 tablespoon ginger-garlic paste 1 teaspoon red chili powder 1 teaspoon garam masala 1/2 teaspoon cumin seeds 1/2 teaspoon turmeric powderSalt to tasteFresh coriander and green chilies for garnish .Instructions:Cook Chicken: Heat oil in a karhai (wok). Add cumin seeds and onions, sauté until golden. Add ginger-garlic paste and cook for 1 minute.Add Spices & Tomatoes: Add tomatoes red chili powder garam masala turmeric and salt. Cook until tomatoes soften.Cook Chicken: Add chicken pieces stir well and cook for 15-20 minutes until the chicken is cooked through and the oil separates.Garnish & Serve: Garnish with fresh coriander and green chilies. Serve hot with naan or rice . Enjoy this quick and flavorful Chicken Karhai in under 30 minutes!",
    image: "/images/pic1.png",
  },
  {
    id: "3",
    title: "Fruits Custard Recipe !",
    description: "Quick & Easy Fruit Custard Recipe A simple, refreshing dessert that is perfect for any occasion—this fruit custard is creamy, delicious, and full of vibrant fruits!Ingredients: 2 cups milk 3 tablespoons custard powder 3 tablespoons sugar (adjust to taste) 1/2 teaspoon vanilla extract 1 cup mixed fruits (apple, banana, mango, pomegranate, etc.)A pinch of cardamom (optional) . Instructions: Prepare Custard: In a small bowl, mix custard powder with a little milk to form a smooth paste. Heat the remaining milk in a pan, add sugar, and bring it to a boil. Cook Custard: Add the custard paste to the boiling milk, stirring continuously. Cook for 2-3 minutes until the custard thickens. Remove from heat and stir in vanilla extract. Cool & Mix Fruits: Let the custard cool to room temperature, then refrigerate for 10-15 minutes. Once cooled, add chopped mixed fruits. Serve: Serve chilled, garnished with extra fruits if desired. Enjoy this creamy and fruity dessert in just 20 minutes!",
    date: "2024-12-31",
    image: "/images/pic3.png",
  },
  {
    id: "4",
    title: "Chicken Tikka Recipe !",
    description: "Here is a **short and easy Chicken Tikka** recipe: ### Easy Chicken Tikka Recipe Juicy, flavorful, and simple to make, this Chicken Tikka is perfect for any occasion! ### Ingredients: 500g chicken (boneless, cut into pieces)  1/2 cup yogurt  1 tablespoon ginger-garlic paste  1 teaspoon red chili powder  1 teaspoon garam masala  1/2 teaspoon turmeric powder Salt to taste 1 tablespoon lemon juice 1 tablespoon oil ### Instructions: 1. **Marinate the Chicken:** In a bowl, mix yogurt, ginger-garlic paste, red chili powder, garam masala, turmeric, salt, lemon juice, and oil. Add the chicken and let it marinate for 30 minutes. 2. **Cook the Chicken:** Preheat the oven or grill to 180°C (350°F). Skewer the marinated chicken and cook for 15-20 minutes until golden and cooked through. 3. **Serve:** Serve hot with naan or a side of raita. Enjoy your delicious Chicken Tikka in under 30 minutes!",
    date: "2024-12-31",
    image: "/images/pic4.png",
  },
  {
    id: "5",
    title: "Chicken Chowmein Recipe !",
    description: "Here is a **short and easy Chicken Chowmein** recipe  . ### Easy Chicken Chowmein Recipe This quick and tasty Chicken Chowmein is the perfect stir-fry dish for busy days—flavorful, satisfying, and ready in no time! #### Ingredients: 200g chowmein noodles 250g chicken (boneless, sliced) 1 tablespoon soy sauce 1 tablespoon oyster sauce  1/2 teaspoon black pepper 1 tablespoon sesame oil (or vegetable oil) 1 onion (sliced) 1 bell pepper (sliced) 1 carrot (julienned) 2 garlic cloves (minced)  Salt to taste Fresh coriander for garnish ### Instructions: 1. **Cook Noodles:** Boil the noodles according to package instructions, drain, and set aside. 2. **Cook Chicken:** Heat sesame oil in a pan, add sliced chicken, and cook until tender. Remove and set aside. 3. **Stir-Fry Veggies:** In the same pan, add garlic, onion, bell pepper, and carrot. Stir-fry for 2-3 minutes. 4. **Combine:** Add cooked noodles, chicken, soy sauce, oyster sauce, and black pepper. Stir well to combine and cook for another 2-3 minutes. 5. **Serve:** Garnish with fresh coriander and serve hot. Enjoy this quick and flavorful Chicken Chowmein in just 20 minutes!",
    date: "2024-12-31",
    image: "/images/pic5.png",
  },
  {
    id: "6",
    title: "Beef Shami Kabab Recipe !",
    description: "Here is a **short and easy Shami Kabab** recipe : ### Easy Shami Kabab Recipe These delicious, tender Shami Kababs are packed with flavor and are perfect for any meal or snack! #### Ingredients: 500g beef or chicken (minced) 1/2 cup chana daal (split chickpeas) 1 onion (sliced) 2-3 green chilies (chopped) 1 tablespoon ginger-garlic paste 1 teaspoon garam masala 1 teaspoon cumin powder 1 teaspoon red chili powder 1/2 teaspoon turmeric powder Salt to taste Fresh coriander (chopped) 1 egg (beaten) for coating Oil for frying #### Instructions: 1. **Cook Meat & Daal:** In a pot, combine minced meat, chana daal, onion, ginger-garlic paste, green chilies, spices, and enough water to cover. Cook until the meat and daal are tender (about 30 minutes). 2. **Grind the Mixture:** Once cooled, grind the mixture into a smooth paste. Add fresh coriander and mix well. 3. **Shape Kababs:** Divide the mixture into small portions and shape into round or oval patties. 4. **Fry the Kababs:** Dip the kababs in the beaten egg, then fry in hot oil until golden brown on both sides. 5. **Serve:** Serve hot with chutney or naan. Enjoy these flavorful Shami Kababs as a snack or with your favorite meal!",
    date: "2024-12-31",
    image: "/images/pic6.png",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl  font-bold  text-center mt-10">
        Post Not Found{" "}
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-center text-blue-black">
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={100}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700 ">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}
