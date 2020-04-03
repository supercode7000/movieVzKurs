import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './movieslist.css'
import { movies } from '../dataMovies.js'

class MoviesList extends Component {
    state = {
        movies: movies
    }
    sortAscending = () => {
        const movies = this.state.movies.sort((elt1, elt2) => elt1.year - elt2.year)
        this.setState({ movies });
    }
    sortDescending = () => {
        const movies = this.state.movies.sort((elt1, elt2) => elt2.year - elt1.year)
        this.setState({ movies });
    }
    sortByAtoZ = () => {

        const movies = this.state.movies.sort((elt1, elt2) => {
            const a = elt1.title.toUpperCase()
            const b = elt2.title.toUpperCase()
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
        })
        //this.setState({ movies: movies });
        this.setState({ movies });
    }
    sortByZtoA = () => {

        const movies = this.state.movies.sort((elt1, elt2) => {
            const a = elt1.title.toUpperCase()
            const b = elt2.title.toUpperCase()
            if (a > b) {
                return -1
            } else if (a < b) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ movies });
    }
    sortByRate = () => {
        const movies = this.state.movies.sort((elt1, elt2) => elt2.rate - elt1.rate)
        this.setState({ movies });
    }
    sortByAction = () => {
        const movies = this.state.movies.filter(movie => {
            // return movie.genre.indexOf("Action") !== -1
            return movie.genre.includes("Action")
        })
        this.setState({ movies });
    }
    render() {
        const moviesList = this.state.movies.map((movie, i) => {
            return <MovieItem movie={movie} key={i} />
        })
        return (
            <main>
                <div className="button">
                    <button onClick={this.sortAscending}>Sort by Date Ascending</button>
                    <button onClick={this.sortDescending}>Sort by Date Descending</button>
                    <button onClick={this.sortByAtoZ}>Sort By A-Z</button>
                    <button onClick={this.sortByZtoA}>Sort By Z-A</button>
                    <button onClick={this.sortByRate}>Sort By Rate</button>
                    <button onClick={this.sortByAction}>Action</button>
                </div>
                <section>

                    {moviesList}
                </section>
            </main>
        );
    }
}

export default MoviesList;