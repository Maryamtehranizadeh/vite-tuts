import { useState } from 'react';
import './CourseCard.css';

function CourseCard({ data: { name, description } }) {
  const [selected, setSelected] = useState(true);
  return (
    <div>
      <li className={`list-item ${selected && 'selected'}`}>
        <h4 style={{ color: !selected && 'tomato' }}>{name}</h4>
        <p>{description}</p>
      </li>

      <button onClick={() => setSelected((s) => !s)}>Select</button>
    </div>
  );
}

export default CourseCard;
