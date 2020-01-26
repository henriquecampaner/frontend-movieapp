import React from 'react';
import { Link } from 'react-router-dom';

import { FaTv, FaFilm, FaHeart } from 'react-icons/fa';
import { Head, NavIcon, Container } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Head>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav>
          <NavIcon to="/series">
            <FaTv color="#fff" size={40} />
          </NavIcon>

          <NavIcon to="/movies">
            <FaFilm color="#fff" size={40} />
          </NavIcon>

          <NavIcon to="/movies">
            <FaHeart color="#fff" size={40} />
          </NavIcon>
        </nav>
      </Container>
    </Head>
  );
}
