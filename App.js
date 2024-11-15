import { useState } from 'react';
import data from '../mock.json';
import QuizList from './QuizList';

function App() {
  const [ value, setValue ] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <header>퀴즈 게임</header>
      <QuizList items={data} onChange={handleChange} />
    </>
  );
}

export default App;