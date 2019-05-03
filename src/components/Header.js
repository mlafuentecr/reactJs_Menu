import React from 'react';
import PropTypes from 'prop-types';


// function Header (props){} es lo mismo
const Header = (props) => (


       <header className="top">
       <h1>
         Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          day
          </h1>
        <h3 className="tagline">
        <span>{props.tagline}</span>
        </h3>
       </header>
);


//con PropoTypes alerto que tagline es necerario
Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
export default Header;
