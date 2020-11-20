import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(searchText) {}
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
