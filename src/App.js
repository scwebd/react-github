import React, { Component } from "react";
import FallCard from "./components/fallcard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import fall from "./fall.json";
import "./App.css";

class App extends Component {
  state = {
    fall: fall,
    clickedImg: [],
    score: 0,
    topScore: 0
  };

  cardClick = id => {
    const gameScore = [];
    if (this.state.clickedImg.includes(id)) {
      this.setState({ score: 0, clickedImg: [] })
      alert("This image has already been clicked!")
    } else {
      this.state.clickedImg.push(id);
      this.state.score++;
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score,
        });
      }
    }

    for (let idx = 0; idx < 12; idx++) {
      gameScore.push(this.state.fall.splice(Math.floor(Math.random() * this.state.fall.length), 1)[0])
    }
    this.setState({ fall: gameScore });
  };

  render() {
    return (
      <Wrapper>
        <Title
          title="Fall Clicky Game"
          instructions="Click an image to earn points but only click each image once!"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.fall.map(student => (
          <FallCard
            cardClick={this.cardClick}
            id={student.id}
            key={student.id}
            image={student.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;