import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {/* we are using the Row component which is located inside the Row.js
          then passing the Netflix Originals String as a parameter value for the title */}
      <Row
        title="Netflix Originals"
        // this is to pass the url into the Row from the requests.js file
        fetchUrl={requests.fetchNetflixOriginals}
      />
      {/* <Row title="Trending Now" fetchUrl="${requests.fetchNetflixOriginals}" /> */}
    </div>
  );
}

export default App;
