import Link from "next/link";

export default function Home() {
  return (
    <main className="InterceptStyle">
      <h1>Wellcom Home !</h1>
      <Link href="/blog" className="p-2 bg-black text-white rounded-lg">
        Blog
      </Link>
      <Link href="/product" className="p-2 bg-black text-white rounded-lg">
        Products
      </Link>
    </main>
  );
}
