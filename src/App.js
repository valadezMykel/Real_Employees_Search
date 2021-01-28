import Searchbar from './components/searchBar';
import Navbar from './components/navbar';
import EmployeeCard from './components/employeeCard';
import React, { useState }from 'react'



function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <Navbar />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <EmployeeCard searchInput={searchInput} setSearchInput={setSearchInput}/>
    </>
  );
}

export default App;
