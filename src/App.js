import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Characters from "./Characters.json";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import './App.css';

// CLASS COMPONENT...............
class App extends Component {

state = {
  bannerText: "Click A Card",
  score: 0,
  topScore: 0,
  Characters,
  clickedIds: []
}
// CLICK HANDLER FOR CHANGING STATE AND SHUFFLING CARDS....
clickHandler = clicked => {

  if (this.state.clickedIds.includes(clicked)) {
    this.setState({ bannerText: "Sorry You Lost!" });
    if (this.state.topScore < this.state.score) {
      this.setState({ topScore: this.state.score })
    }
    this.setState({ score: 0 })
    this.setState({ clickedIds: [] });
  } else {
    this.setState({ clickedIds: [...this.state.clickedIds, clicked] })
    this.setState({ bannerText: "Correct Guess!!" });
    this.setState({ score: this.state.score + 1 })
  }
  var newCharacters = this.state.Characters;
  this.shuffleCharacters(newCharacters)

};
// SHUFFLE CHARACTER CARDS........
shuffleCharacters = (newCharacters) =>{
  let i = newCharacters.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newCharacters[i];
    newCharacters[i] = newCharacters[j];
    newCharacters[j] = temp;
  }
  this.setState({ Characters: newCharacters })
}
// RENDER FUNCTION............
render() {
  return (
    <div>
      <Navbar
          bannerText={this.state.bannerText}
          score={this.state.score}
          topScore={this.state.topScore}
      />
      <Title>Don't Click The Same Celeb Twice</Title>
    <Wrapper>
      {this.state.Characters.map((val) => {
        return <CharacterCard
          clickHandler={this.clickHandler}
          id={val.id}
          key={val.id}
          image={val.image}
        />
      })}
      </Wrapper>
    </div>
  );
}

}
export default App;

