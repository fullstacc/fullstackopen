const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = ({ parts }) => {
  console.log('total of', parts);
  const totalExercises = parts.reduce((sum, exercise) => {
    return (sum += exercise.exercises);
  }, 0);

  return (
    <div>
      <b>total of {totalExercises} exercises</b>
    </div>
  );
};

const Header = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
);

// content is used to return parts
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
};

// parts are the lowest level of components
const Part = ({ part }) => {
  return (
    <div key={part.id}>
      {' '}
      {part.name} {part.exercises}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((course) => {
    return <Course course={course} />;
  });
};

export default App;

// 2.1 Define a component responsible for formatting a single course called Course.
// App -> Course
// Header, Content, [Parts]

// 2.2: Course information step7
// Show also the sum of the exercises of the course.

// 2.3*: Course information step8
// If you haven't done so already, calculate the sum of exercises with the array method reduce.

// 2.4: Course information step9
// Let's extend our application to allow for an arbitrary number of courses
