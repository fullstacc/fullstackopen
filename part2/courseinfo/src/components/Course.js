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
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

// parts are the lowest level of components
const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

export default Course;
