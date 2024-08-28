import styled from 'styled-components';
import { useState } from 'react';

const Div = styled.div`
  background-color: pink;
  padding: 40px;
  color: blue;
  border: 10px dotted ${(props) => (props.selected ? 'blue' : 'red')};
  &:hover {
    background-color: #e7d3d3;
    color: brown;
  }
  @media (max-width: 600px) {
    background-color: tomato;
  }
`;

function Banner({ title, description }) {
  const [selected, setSelected] = useState(true);
  return (
    <Div selected={selected}>
      <button onClick={() => setSelected((s) => !s)}>
        Click to change border!
      </button>
      <hr />
      <h2>
        {title} | {description}
      </h2>
      <hr />
    </Div>
  );
}

export default Banner;
