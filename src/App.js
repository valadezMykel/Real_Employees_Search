// import Searchbar from './components/searchComponents/searchBar';
import Navbar from './components/navbar';
import EmployeeCard from './components/employeeCard';
import React, { useState } from 'react'
import Search from './components/search'


function App() {
  const [searchInput, setSearchInput] = useState('')
  const [activeSearchType, setActiveSearchType] = useState('fname')
  

  return (
    <>
      <Navbar />
      <Search 
      setSearchInput={setSearchInput} 
      setActiveSearchType={setActiveSearchType} 
      activeSearchType={activeSearchType} />
      <EmployeeCard searchInput={searchInput} activeSearchType={activeSearchType}/>
    </>
  );
}

export default App;
