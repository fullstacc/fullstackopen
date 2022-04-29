import { useState } from 'react';

const Feedback = (props) => {
  console.log(props);
  // display "give feedback" and feedback sentiment buttons
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={props.updateGood} text="good" />
      <Button handleClick={props.updateNeutral} text="neutral" />
      <Button handleClick={props.updateBad} text="bad" />
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const allFeedback = props.good + props.bad + props.neutral;

  const Average = () => {
    if (allFeedback > 0) {
      const average = (props.good - props.bad) / allFeedback;
      return <p>average {average} </p>;
    }
  };

  const Positive = () => {
    if (allFeedback > 0) {
      const positive = (props.good / allFeedback) * 100;
      return <p>positive {positive} %</p>;
    }
  };

  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {allFeedback}</p>
          <Average />
          <Positive />
        </div>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        updateGood={() => setGood(good + 1)}
        updateNeutral={() => setNeutral(neutral + 1)}
        updateBad={() => setBad(bad + 1)}
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
