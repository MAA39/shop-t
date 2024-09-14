import "server-only";

import { POSTS_ENDPOINT_URL } from "@/lib/wp";
import { BlogPost } from "@/types/posts";

export const getPosts = async () => {
  const res = await fetch(POSTS_ENDPOINT_URL);
  const posts = await res.json();
  return posts as BlogPost[];
};
