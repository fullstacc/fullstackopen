import { useState } from 'react';

const Feedback = (props) => {
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

const StatisticsLine = (props) => {
  console.log('made it here');
  console.log(props);
  let returnText = '';

  if (props.text === 'average') {
    // compute average
    const average = (props.good - props.bad) / props.allFeedback;
    returnText = `${props.text} ${average}`;
    return returnText;
  } else if (props.text === 'positive') {
    const positive = (props.good / props.allFeedback) * 100;

    //interpolation ftw
    returnText = `${props.text} ${positive} %`;
  } else {
    returnText = `${props.text} ${props.data}`;
  }
  return returnText;
};

const Statistics = (props) => {
  const allFeedback = props.good + props.bad + props.neutral;

  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <StatisticsLine text="good" data={props.good} />
              </tr>
              <tr>
                <StatisticsLine text="neutral" data={props.neutral} />
              </tr>
              <tr>
                <StatisticsLine text="bad" data={props.bad} />
              </tr>
              <tr>
                <StatisticsLine
                  text="average"
                  good={props.good}
                  bad={props.bad}
                  neutral={props.neutral}
                  allFeedback={allFeedback}
                />
              </tr>
              <tr>
                <StatisticsLine
                  text="positive"
                  good={props.good}
                  bad={props.bad}
                  allFeedback={allFeedback}
                />
              </tr>
            </tbody>
          </table>
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
