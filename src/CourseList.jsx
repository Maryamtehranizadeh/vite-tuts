import CourseCard from './CourseCard';

function CourseList() {
  const courses = [
    { id: 1, name: 'React', description: 'This is React course' },
    { id: 2, name: 'JS', description: 'This is JS course' },
    { id: 3, name: 'Node', description: 'This is Node course' },
    { id: 4, name: 'Next', description: 'This is Next course' },
  ];
  return (
    <div>
      <h3>Course List:</h3>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
