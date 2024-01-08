import Link from 'next/link';

export default function ShareMealPage() {
  return (
    <>
      <h1>ShareMeal Page</h1>
      <p>
        <Link href='../../meals'>Back to Meals Page Link</Link>
      </p>
      <p>
        <Link href='../../community/'>CommunityPage Link</Link>
      </p>
    </>
  );
}
