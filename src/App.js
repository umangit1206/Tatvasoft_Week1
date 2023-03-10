import logo from './logo.svg';
import './App.css';
import BasicReact from './Component/BasicReact';
import Title from './Component/Title';
import Home from './Component/Home';
import Counter from './Component/Counter';
import List from './Component/list';
import Form from './Component/loginForm';


function App() {
  return (
    <div className="App">
   <h1>||Week 1 Day 1 Task</h1>
      <BasicReact></BasicReact>
      <h1>||Week 1 Day 2 Task</h1>
      <Home></Home>
      <Title></Title>
      <Title></Title>
      <Title name="ABC" age="20"></Title>
      <h1>||Week 1 Day 3 Task||</h1>
      <h1>||Week 1 Day 4 Task||</h1>
      <Counter></Counter>
      <h1>||Week 1 Day 5 Task||</h1>
      <button>Change Page</button>
    
      <h1>||                                  Week 1 Day 6 Task                       ||</h1>
    <List></List>
    <h1>||                                  Week 1 Day 7 Task                       ||</h1>
    <Title></Title>
    <Form></Form>
    </div>
  );
}

export default App;
