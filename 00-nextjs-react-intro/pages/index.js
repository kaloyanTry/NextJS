import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default Next Title'}</h1>;
}

export default function HomePage() {
  const names = ['Keva K', 'Ana K', 'Smi V', 'Gabi G'];

  const [likes, setLikes] = useState(0);

  function handleClickLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title='Develop. Preview. Ship. 🚀' />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClickLikes}>Like ({likes})</button>
    </div>
  );
}
