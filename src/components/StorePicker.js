/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import React, { Fragment } from 'react'; <Fragment> lo uso asi o
// como esta ahora para que react lea varios tags or divs sino lee solo uno
class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>please enter store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store → </button>
        </form>
      </React.Fragment>
    );
  }
}
export default StorePicker;
