import React from 'react';


// function Header (props){} es lo mismo
const Header = (props) => (

      <div className="menu">
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
      </div>


);

export default Header;
