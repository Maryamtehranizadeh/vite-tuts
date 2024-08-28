import { useState } from 'react';
import CourseCard from './CourseCard';
import styles from './CourseList.module.css';

function CourseList() {
  const [selected, setSelected] = useState(false);
  const courses = [
    { id: 1, name: 'React', description: 'This is React course' },
    { id: 2, name: 'JS', description: 'This is JS course' },
    { id: 3, name: 'Node', description: 'This is Node course' },
    { id: 4, name: 'Next', description: 'This is Next course' },
  ];
  return (
    <div>
      <h3 className={selected ? styles.selected : styles.container}>
        Course List:
      </h3>
      <button onClick={() => setSelected((s) => !s)}>Select it!</button>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
