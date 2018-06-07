import * as React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="name"
          job="job"
        />
        <Counter />
      </div>
    );
  }
}

export default App;
