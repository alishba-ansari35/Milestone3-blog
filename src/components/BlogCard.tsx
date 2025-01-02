import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-neutral-50" : "text-white "
      } rounded-lg shadow-lg hover:shadow-xl transition:shadow duration-300`}
    >
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={48}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl mt-4 text-center text-black font-bold ">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>{" "}
      </CardContent>

      <div className="flex flex-col items-center mt-4 ">
        <p
          className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-700' : 'text-slate-700'}`}
        >
          Published on: {post.date ? new Date(post.date).toLocaleDateString() : "Unknown Date"}
        </p>

        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-center text-white bg-black rounded hover:bg-black ${
            isDarkBackground
              ? "bg-black "
              : "bg-black "
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
