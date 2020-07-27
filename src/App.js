import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './pages/Login';

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
    <div>
        <Login />
    </div>
  );
}

export default App;
