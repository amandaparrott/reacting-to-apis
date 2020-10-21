import React from "react";
// import 'isomorphic-fetch';
// import 'es6-promise';
import FilmCard from "./FilmCard";
import PersonCard from './PersonCard';
import Header from "./Header"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      filmsLoaded: true,
      people: [],
      peopleLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then(obj => {this.setState({ films: obj })});
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then(obj => {this.setState({ people: obj })});
  }

  handlePeople = () => this.setState({ filmsLoaded: false, peopleLoaded: true});
  handleFilms = () => this.setState({ filmsLoaded: true, peopleLoaded: false});
 

  render() {
      if (this.state.filmsLoaded && !this.state.peopleLoaded) {
          return (
              < React.Fragment>
            < Header handleFilms={this.handleFilms} handlePeople={this.handlePeople}/>
              <main className="container">
                  <header className="d-flex">
                  </header>
                  <section className="row my-2 justify-content-center">
                  {this.state.films.map((film, id) => <FilmCard key={id} film={film} />)}
                      </section>              
                      </main>
                      </React.Fragment>
          )
      } else if (!this.state.filmsLoaded && this.state.peopleLoaded) {
          return (
            < React.Fragment>
            < Header handleFilms={this.handleFilms} handlePeople={this.handlePeople}/>
            <main className="container">
            <header className="d=flex"></header>
            <section className="row my-2 justify-content-center">
            {this.state.people.map((person, id) => <PersonCard key={id} person={person} />)}
            </section>
            </main>
            </ React.Fragment>
          )
      } else {
          return (
            < React.Fragment>
            < Header handleFilms={this.handleFilms} handlePeople={this.handlePeople}/>
            </ React.Fragment>
          )
      }
    }
}


 

export default App
