import React, { useState } from 'react';

const Statisticsline = ({ text, value }) => (
  <div>
    <p>
      {text} : {value}
    </p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
);

const Statistics = (props) => {
  const { good, bad, neutral } = props;
  // const good = props.good;
  // const bad = props.bad;
  // const neutral = props.neutral;
  const allScores = good + neutral + bad;

  const positiveFeedback = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      let total = good + neutral + bad;
      let positive = good / total;
      return positive;
    }
  };

  const avgScore = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      let total = good + neutral + bad;
      let average = (good + bad) / total;
      return average;
    }
  };
  if (good || bad || neutral) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td> good </td>
              <td>{good}</td>
            </tr>
            <tr>
              <td> neutral </td>
              <td> {neutral} </td>
            </tr>
            <tr>
              <td> bad </td>
              <td> {bad} </td>
            </tr>
            <tr>
              <td> scores </td>
              <td> {allScores} </td>
            </tr>
            <tr>
              <td> average </td>
              <td> {avgScore()} </td>
            </tr>
            <tr>
              <td> positive </td>
              <td> {positiveFeedback()} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
}; // end Statistics

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // TODO: make a props object containing everything needed to run statistics

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} />
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

/*
1.8: unicafe step3
Refactor your application so that displaying the statistics is extracted into its own Statistics component.
The state of the application should remain in the App root component.
*/

/*
1.10: Button for defining the buttons used for submitting feedback
StatisticLine for displaying a single statistic, e.g. the average score.
*/
