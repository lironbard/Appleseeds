import React from "react";
import axios from "axios";

import AvatarList from "./components/avatar-list/AvatarList.component";

// "https://randomuser.me/api/"
class App extends React.Component {
  state = { avatars: [] };
  async componentDidMount() {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      const promise = axios.get("https://randomuser.me/api/");
      promises.push(promise);
    }
    const avatarsData = await Promise.all(promises);
    const avatars = avatarsData.map((avatar) => {
      const avatarObj = avatar.data.results[0];
      console.log(avatar);
      return {
        id: avatarObj.login.uuid,
        firstName: avatarObj.name.first,
        lastName: avatarObj.name.last,
        image: avatarObj.picture.medium,
      };
    });

    this.setState({ avatars });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <AvatarList data={this.state.avatars} />
      </div>
    );
  }
}

export default App;
