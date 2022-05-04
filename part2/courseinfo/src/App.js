const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <div>
        <Content parts={course.parts} />
      </div>
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
        <div key={part.id}>
          {part.name} {part.exercises}
        </div>
      ))}
    </div>
  );
};

const Part = (props) => {};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
    ],
  };

  return <Course course={course} />;
};
export default App;

// 2.1 Define a component responsible for formatting a single course called Course.
// App -> Course
// Header, Content, [Parts]
