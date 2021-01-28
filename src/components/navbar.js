import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function navbar() {
    const stylings = {
        color: 'white',
        fontSize: '2rem'
    }

    return (
        <>
            <Navbar bg='dark'>
                <Navbar.Brand style={stylings}>These Are People</Navbar.Brand>
            </Navbar>
        </>
    )
}
