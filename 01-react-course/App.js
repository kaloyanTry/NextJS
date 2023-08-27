import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>ToDo's</h1>
      {/* Todo component with text atribute => props */}
      <Todo text='Learn NextJS' />
      <Todo text='Master NextJS' />
      <Todo text='Explore the full React-NextJS course' />
    </div>
  );
}

export default App;
