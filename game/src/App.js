import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = {
      cards,
      score: 0
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
  }
  
  handleCardClick(cardId) {
    
    console.log('cardId', cardId);
    const imageClicked = this.state.cards.filter(card => card.id === cardId);
    
    if (imageClicked[0].wasclicked === false) {
      imageClicked[0].wasclicked = true;
      this.setState({ score: this.state.score + 1});
    } else {
        alert("You Lose! You already clicked that image. Please try again!");
        this.setState({ score: 0});
        for (let i = 0; i < cards.length; i++) {
            cards[i].wasclicked = false;
        }
    }
    
    /* TODO: 
      1. check if user clicked on card already
      2a. if they did show them their score & ask them to play again
      2b. if they didn't add 1 to score
      3. if score === this.state.cards.length they won
    */ 
    
    // 2b
    // this.setState({ score: this.state.score + 1 });
    
    this.shuffleCards();
  }
  
  shuffleCards() {
    let cards = this.state.cards;
    
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    this.setState({ cards });
  }

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}/>
        
        <div className="container">
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            onCardClick={this.handleCardClick}
            wasclicked={this.wasclicked}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;

