import React from 'react';
import {Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Rick and Morty Fansite</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/characters">Characters</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;