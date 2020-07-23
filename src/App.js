import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [routes, setRoutes] = useState({})
  
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getRoutes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setRoutes(data)
        console.log(data)
        
      } catch (error) {
        console.error(error)
      }
    }

    getRoutes();
  }, [apiUrl])


  return (
    <div className="App">
      <header className="App-header">
        <p>React Node Redis Auth</p>
        
      </header>
    </div>
  );
}

export default App;
