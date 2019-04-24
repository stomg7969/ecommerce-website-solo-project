import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div id="filter">
        {/* <Link to="/">
          <span> |Landing Page| </span>
        </Link> */}
        <h3>Filter section here</h3>
        <p>*each word should be in each divs*</p>
        <div>
          <strong>Filter:</strong>
          {/* mouseover event listener with onclick */}
          {/* clicking, will pass up to parent to appear as tags. */}
          <label>Colors:</label>
          <div>
            <h5>
              white, black, brown, navy, blue, yellow, pink, purple, beige, red,
              green
            </h5>
          </div>
          <label>Gender:</label>
          <div>
            <h5>boy, girl, unisex</h5>
          </div>
          <label>Materials:</label>
          <div>
            <h5>modal, cotton, spandex, tencel, rayon</h5>
          </div>
          <label>Category:</label>
          <div>
            <h5>innerwear, dress, robe, pajamas, sweater, pants</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
