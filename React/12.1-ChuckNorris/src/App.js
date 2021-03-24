import React from "react";
import axios from "axios";

//"https://api.chucknorris.io/jokes/categories"

class App extends React.Component {
  state = { joke: "", errorMessage: "", categories: null, isLoading: false };
  async componentDidMount() {
    const categories = await axios.get("https://api.chucknorris.io/jokes/categories");
    this.setState({ categories: categories.data });
    console.log(categories.data);
  }

  handleJoke = async () => {
    try {
      this.setState({ isLoading: true });
      const joke = await axios.get("https://api.chucknorris.io/jokes/random");
      console.log(joke.data.value);
      this.setState({ joke: joke.data.value, isLoading: false });
    } catch (e) {
      this.setState({ errorMessage: e.message });
    }
  };

  handleCategory = async (value) => {
    const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${value}`);
    this.setState({ joke: joke.data.value });
  };

  render() {
    const renderCategories = () => {
      return this.state.categories.map((el, i) => {
        return (
          <button key={i} onClick={() => this.handleCategory(el)}>
            {el}
          </button>
        );
      });
    };
    return (
      <div>
        <h1>Chuck Norris jokes: </h1>
        {this.state.isLoading && <div>Loading...</div>}
        <button onClick={this.handleJoke}>Random Joke</button>
        {this.state.errorMessage}
        {this.state.categories && renderCategories()}
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default App;
