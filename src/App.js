
import './App.css';
import Button from '@mui/material/Button'
import {useState, useEffect} from 'react'
import BasicTable from './component/BasicTable'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const apiURL = 'https://randomuser.me/api/?results=10'
    
    const fetchData = async() => {
      try {
        const response = await fetch(apiURL)
        const data = await response.json()
        setData(data.results)

      } catch(e) {

      }
      fetchData()
    }

  }, [])
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <BasicTable />
    </div>
  );
}

export default App;
