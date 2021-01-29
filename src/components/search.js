import React from 'react'
import SearchBar from './searchComponents/searchBar'
import SearchTypeBtn from './searchComponents/searchTypeButton'
import GenderToggle from './searchComponents/genderToogle'



export default function Search(props) {

    function isGenderOrNot() {
        if(props.activeSearchType === 'gender') {
            return <GenderToggle setSearchInput={props.setSearchInput} />
        } else {
            return <SearchBar setSearchInput={props.setSearchInput}/>
        }
    }

    return (
        <div>
            <SearchTypeBtn activeSearchType={props.activeSearchType} setActiveSearchType={props.setActiveSearchType}/>
            {isGenderOrNot()}
        </div>
    )
}
