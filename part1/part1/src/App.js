const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
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

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  // console.log(props.parts[0]);
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';

  // instantiate array of objects
  const courses = [];

  // instantiate each part as an object
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  courses.push(part1);

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  courses.push(part2);

  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };
  courses.push(part3);

  // add objects to array

  // Content renders the parts and their number of exercises
  // Total renders the total number of exercises

  return (
    <div>
      <Header title={course} />
      <Content parts={courses} />
      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;

/* 1.1 Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, and Total.
All data still resides in the App component, which passes the necessary data to each component using props */
