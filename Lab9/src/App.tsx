import './App.css';
import PageTitle from './common/components/PageTitle';
import ToDoContainer from './todos/components/ToDoContainer';

function App() {
  return (
    <>
      <PageTitle title="ToDoApp" />
      <ToDoContainer />
    </>
  );
}

export default App;
