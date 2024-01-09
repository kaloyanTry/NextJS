import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href='./meals/share'>MealsSharePage Link</Link>
      </p>
      <p>
        <Link href='../community'>CommunityPage Link</Link>
      </p>
    </>
  );
}
