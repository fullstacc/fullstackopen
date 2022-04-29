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
    returnText = (
      <div>
        {props.text} {average}
      </div>
    );

    return returnText;
  } else if (props.text === 'positive') {
    const positive = (props.good / props.allFeedback) * 100;
    returnText = (
      <div>
        {props.text} {positive} %
      </div>
    );
  } else {
    returnText = (
      <div>
        {props.text} {props.data}
      </div>
    );
  }
  return returnText;
}; // end StatisticsLine

const Statistics = (props) => {
  const allFeedback = props.good + props.bad + props.neutral;

  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>
          <StatisticsLine text="good" data={props.good} />
          <StatisticsLine text="neutral" data={props.neutral} />
          <StatisticsLine text="bad" data={props.bad} />
          <StatisticsLine
            text="average"
            good={props.good}
            bad={props.bad}
            neutral={props.neutral}
            allFeedback={allFeedback}
          />
          <StatisticsLine
            text="positive"
            good={props.good}
            bad={props.bad}
            allFeedback={allFeedback}
          />
          {/* <p>good {props.good}</p> */}
          {/* <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {allFeedback}</p> */}
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
