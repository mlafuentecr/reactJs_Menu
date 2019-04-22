import React from 'react';
class Header extends React.Component {
  render() {
    return (
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
        <span>Fresh seafood Market</span>
        </h3>
       </header>
      </div>
    );
  }
}
export default Header;
