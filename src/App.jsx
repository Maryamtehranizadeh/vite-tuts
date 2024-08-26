import CourseList from './CourseList';
import Banner from './Banner';
import Counter from './counter';
import Test from './Test';

function App() {
  return (
    <>
      <Test />
      <Counter />
      <Banner title="My Botostart" description="A programing website" />
      <div>
        <h1>BotoStart | Vite Project</h1>
      </div>
      <CourseList />
    </>
  );
}

export default App;
