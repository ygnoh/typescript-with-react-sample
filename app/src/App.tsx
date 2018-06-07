import * as React from 'react';
import Profile from './components/Profile';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
          name="name"
          job="job"
        />
      </div>
    );
  }
}

export default App;
