import React from "react";

class Sort extends React.Component {
  render() {
    return (
      <div id="sort">
        <h3>Sort section here</h3>
        <p>by price</p>
        <div>
          <strong>Sort:</strong>
          {/* mouseover event listener with onclick */}
          {/* clicking, will pass up to parent to appear as tags. */}
          <div>
            <h5>$ Log - High</h5>
          </div>
          <div>
            <h5>$ High - Low</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
