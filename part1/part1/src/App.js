const Header = (props) => {
  return (
    <div>
      <h1> {props.course.name} </h1>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  // hard coded for now; we assume there will always be 3 elements in the array
  const totalAmount =
    props.course.parts[0].exercises +
    props.course.parts[1].exercises +
    props.course.parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {totalAmount}</p>
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
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

/* 1.1 Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, and Total.
All data still resides in the App component, which passes the necessary data to each component using props */
