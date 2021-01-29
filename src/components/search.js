import React, { useState } from 'react'
import SearchBar from './searchComponents/searchBar'
import SearchTypeBtn from './searchComponents/searchTypeButton'
import { Button } from 'react-bootstrap';


export default function Search(props) {
    const [searchBarCount, setSearchBarCount] = useState(1);

    function addSearchField() {
        
        setSearchBarCount(searchBarCount + 1)
    }

    return (
        <div>
            { new Array(searchBarCount).fill(
            <SearchBar setSearchInput={props.setSearchInput}/>)}
            <Button onClick={addSearchField}>Add Search Field</Button>
        </div>
    )
}
