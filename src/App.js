//imports dependencies and files
import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Body from "./components/Body";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import actor from "./characters.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    actor,
    clickedActor: [],
    score: 0
  };

  //click card, remove actor from array
  imageClick = event => {
    const currentActor = event.target.alt;
    const actorAlreadyClicked = this.state.clickedActor.indexOf(currentActor) > -1;

    //if you click re-click the same actor, reset game & re do cards
    if (actorAlreadyClicked) {
      //reset state
      this.setState({
        actor: this.state.actor.sort(function(a, b) {
          //re order characters
          return 0.5 - Math.random();
        }),
        clickedActor: [],
        score: 0
      });
        alert("I'm sorry you lost. Let's play again?");

    //if you continue to select new actors, increase score & cards re ordered
    } else {
      this.setState(
        {
          //re-order characters
          actor: this.state.actor.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          //change state of actor to clicked 
          clickedActor: this.state.clickedActor.concat(
            currentActor
          ),
          //increase score 
          score: this.state.score + 1
        },
      //selected all twelve, and win.      
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              actor: this.state.actor.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedActor: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <TopNav score={this.state.score} />

        <Body />
        <div className="wrapper">
          {this.state.actor.map(actor => (
            <FriendCard
              imageClick={this.imageClick}
              id={actor.id}
              key={actor.id}
              image={actor.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;