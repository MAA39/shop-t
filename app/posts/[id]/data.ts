import "server-only";

import { POSTS_ENDPOINT_URL } from "@/lib/wp";
import { BlogPost } from "@/types/posts";

export const getPost = async (id: string) => {
  const res = await fetch(`${POSTS_ENDPOINT_URL}/${id}`, {
    cache: "no-store",
  });
  const post = await res.json();
  return post as BlogPost;
};
