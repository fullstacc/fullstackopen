import { useState } from 'react';
//TODO: Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:

const Button = (props) => {
  // functions within components are ok in react

  return (
    <div>
      <button onClick={props.handleClick}>next anecdote</button>
    </div>
  );
};

const VoteButton = (props) => {
  return <button onClick={props.handleClick}>vote</button>;
};

const MostPopular = ({ anecdotes, allScores }) => {
  const max = Math.max(...allScores);
  const maxIndex = allScores.indexOf(max);
  if (max > 0) {
    return <div>{anecdotes[maxIndex]}</div>;
  } else return <div>nothing yet</div>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  /* Store the votes of each anecdote into an array or object in the component's state. 
  Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state. */

  const [selected, setSelected] = useState(0);
  const [allScores, setScores] = useState(Array(6).fill(0));

  const newAnecdote = () => {
    // generates a random number between 0 and the number of anecdotes in the anecdotes array
    // whenever state changes, App() will reload which will cause randNumber to reload to a different number
    const randNumber = Math.floor(Math.random() * anecdotes.length);

    setSelected(randNumber);
  };

  const submitVote = () => {
    const copy = [...allScores];
    copy[selected] += 1;
    setScores(copy);
  };

  return (
    <div>
      <h1>anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>current votes {allScores[selected]}</div>
      <VoteButton handleClick={submitVote}></VoteButton>
      <Button handleClick={newAnecdote}></Button>
      <h1>most popular anecdote</h1>
      <MostPopular anecdotes={anecdotes} allScores={allScores} />
    </div>
  );
};

export default App;
