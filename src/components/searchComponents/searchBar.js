import React, { useRef }from 'react'
import { Form, Dropdown } from 'react-bootstrap'




export default function SearchBar(props) {
    
    let searchValRef = useRef()

    function handleChange(event) {
        props.setSearchInput(searchValRef.current.value)
    }
    
    return (
        <>
            <Form onChange={handleChange}>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type='text' ref={searchValRef}/>
                </Form.Group>
            </Form>
            <Dropdown>
                <Dropdown.Item></Dropdown.Item>
            </Dropdown>
        </>
    )
}
