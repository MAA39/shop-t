import Link from "next/link";

export default function Home() {
  return (
    <div className="container min-h-screen">
      <h1>高橋商店</h1>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
