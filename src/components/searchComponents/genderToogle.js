import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

export default function genderToogle(props) {
    return (
        <div>
            <ButtonGroup>
                <Button onClick={() => props.setSearchInput('male')}>Male</Button>
                <Button onClick={() => props.setSearchInput('female')}>Female</Button>
            </ButtonGroup>
        </div>
    )
}
