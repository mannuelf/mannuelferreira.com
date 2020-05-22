import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ name }) {
  return (
    <Link to="/" name={name}>MF</Link>
  );
}
