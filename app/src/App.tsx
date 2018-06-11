import * as React from 'react';
import Profile from './components/Profile';
import CounterContainer from 'containers/CounterContainer';
import TodoListContainer from 'containers/TodoListContainer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="name"
          job="job"
        />
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
