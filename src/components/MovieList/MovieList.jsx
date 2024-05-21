import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies, imageDetails }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={{ pathname: `${movie.id}`, state: { from: location } }}>
              <img
                src={
                    movie.poster_path === null
                      ? "https://gdr.one/simg/185x278/d0e2ed/fff?text=poster"
                      : `${imageDetails.baseUrl}${imageDetails.mediumSize}/${movie.poster_path}`
                  }
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
