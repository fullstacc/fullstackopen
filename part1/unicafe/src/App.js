import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allScores = good + neutral + bad;
  const avgScore = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      let total = good + neutral + bad;
      let average = (good + bad) / total;
      return average;
    }
  };

  const positiveFeedback = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      let total = good + neutral + bad;
      let positive = good / total;
      return positive;
    }
  };

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={addGood} text="good">
        good
      </button>
      <button onClick={addNeutral} text="neutral">
        neutral
      </button>
      <button onClick={addBad} text="bad">
        bad
      </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allScores}</p>
      <p>average {avgScore()}</p>
      <p>positive {positiveFeedback()}</p>
    </div>
  );
};

export default App;

/*
1.7: unicafe step2
Expand your application so that it shows more statistics about the 
gathered feedback: the total number of collected feedback,
the average score (good: 1, neutral: 0, bad: -1) and the percentage
of positive feedback.
*/
