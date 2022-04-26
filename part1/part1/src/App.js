const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.title} {props.numOfExercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.partsAndExercises[0]} {props.partsAndExercises[1]}
      </p>
      <p>
        {props.partsAndExercises[2]} {props.partsAndExercises[3]}
      </p>
      <p>
        {props.partsAndExercises[4]} {props.partsAndExercises[5]}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  // Content renders the parts and their number of exercises
  // Total renders the total number of exercises

  return (
    <div>
      <Header title={course} />
      <Content
        partsAndExercises={[
          part1,
          exercises1,
          part2,
          exercises2,
          part3,
          exercises3,
        ]}
      />

      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;

/* 1.1 Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, and Total.
All data still resides in the App component, which passes the necessary data to each component using props */
