import { getPosts } from "@/app/posts/data";
import Link from "next/link";

export default async function Page() {
  // データを取得
  const posts = await getPosts();

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title.rendered}</Link>
            <p>{post.id}</p>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
