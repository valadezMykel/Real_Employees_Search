// import Searchbar from './components/searchComponents/searchBar';
import Navbar from './components/navbar';
import EmployeeCard from './components/employeeCard';
import React, { useState } from 'react'
import Search from './components/search'


function App() {
  const [searchInput, setSearchInput] = useState('')
  

  return (
    <>
      <Navbar />
      <Search setSearchInput={setSearchInput}/>
      <EmployeeCard searchInput={searchInput} />
    </>
  );
}

export default App;
