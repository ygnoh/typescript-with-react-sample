import * as React from 'react';
import Profile from './components/Profile';
import CounterContainer from 'containers/CounterContainer';
import TodoList from './components/TodoList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="name"
          job="job"
        />
        <CounterContainer />
        <TodoList />
      </div>
    );
  }
}

export default App;
