import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

// Props interface로 props를 받을 것이라고 알림
class Profile extends React.Component<Props> {
  render() {
    const { name, job } = this.props;

    return (
      <div>
        <h1>프로필</h1>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>직업</b>
          {job}
        </div>
      </div>
    );
  }
}

export default Profile