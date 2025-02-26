import { useState, useEffect } from "react"

const initialMovies = [
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  const[filteredMovies, setFilteredMovies ] = useState(initialMovies);
  const[genre, setGenre] = useState('');
 

  return (
    <>
    <div className="container">
      <h1>Lista films</h1>
      <ul className="list-group">
        {
        filteredMovies.map( (movie) => {
            return(
              <li key={movie.id} className="list-group-item">
                {movie.title} -  {movie.genre}
              </li>
            )
        })
        }
      </ul>
    </div>
    </>
  )
}

export default App
