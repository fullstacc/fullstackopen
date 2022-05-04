import Course from './components/Course';

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
    return <Course key={course.id} course={course} />;
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

// 2.5: separate module
// Declare the Course component as a separate module, which is imported by the App component.
// You can include all subcomponents of the course into the same module.
