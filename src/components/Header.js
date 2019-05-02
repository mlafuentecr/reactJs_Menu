import React from 'react';
import PropoTypes from 'pro-types';


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

Header.PropoTypes = {
  tagline: PropoTypes.string.isRequired;
}
export default Header;
