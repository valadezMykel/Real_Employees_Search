import Searchbar from './components/searchBar';
import Navbar from './components/navbar';
import EmployeeCard from './components/employeeCard';
import React, { useState }from 'react'



function App() {
  const [searchInput, setSearchInput] = useState('')
  

  return (
    <>
      <Navbar />
      <Searchbar setSearchInput={setSearchInput}/>
      <EmployeeCard searchInput={searchInput} />
    </>
  );
}

export default App;
