import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
     <h1>Wellcom Home !</h1>
     <Link href='/blog'>Blog</Link>
     <Link href='/product'>Products</Link>
    </main>
  );
}
