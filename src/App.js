import logo from './logo.svg';
import './App.css';

import useFetch from './hooks/use-fetch';

function App() {

  const { data, loading, error } = useFetch('https://api.publicapis.org/entries')
  console.log(data);
  return (
    <div className="App">
      {loading && <p>{loading}</p>}
      {data && <p>Data is on the log</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
