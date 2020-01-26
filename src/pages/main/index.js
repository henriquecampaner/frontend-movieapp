import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { imgUrl } from '../../services/api';

import { Container, List } from './styles';

function Main() {
  const [movies, setMovies] = useState([]);
  const img = `${imgUrl}/w500`;

  useEffect(() => {
    async function getMovies() {
      const nowPlay = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=401943946343103b798d7ff6a9af27b5&language=en-US&page=1`
      );
      setMovies(nowPlay.data.results);
      console.log(nowPlay.data.results);
    }
    getMovies();
  }, []);

  return (
    <Container>
      <h1>Now Playing</h1>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to="">
              <img src={img + movie.poster_path} alt={movie.original_title} />
            </Link>
            <h3>{movie.original_title}</h3>
            <p>
              <FaCalendarAlt /> {movie.release_date}
            </p>
            <span>
              <FaStar />
              {movie.vote_average} / 10
            </span>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
