import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
        <Link href='./meals'>Link to Meals</Link>
      </p>
      <p>
        <Link href='./meals/share'>Link to ShareMeal</Link>
      </p>
      <p>
        <Link href='./community'>Link to Community Page</Link>
      </p>
    </main>
  );
}
