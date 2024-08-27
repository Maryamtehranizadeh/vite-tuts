function CourseCard({ data: { name, description } }) {
  return (
    <div>
      <li>
        <h4>{name}</h4>
        <p>{description}</p>
      </li>
    </div>
  );
}

export default CourseCard;
