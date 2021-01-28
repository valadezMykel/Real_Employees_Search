import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap';
// import { searchValue } from './searchBar'



export default function EmployeeCard(props) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(
            (results) => {
                setEmployees(results.results)
                setIsLoaded(true)
            },
            (error) => {
                setError(error)
                setIsLoaded(true)
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
        <>
            {console.log(props.searchInput)}
            {employees.map(emp => (
                <Card key={emp.login.uuid}>
                    <Card.Body>
                        <h2>{emp.name.title} {emp.name.first} {emp.name.last}</h2>
                        <Image src={emp.picture.medium} roundedCircle/>
                    </Card.Body>
                </Card>

            ))}
        </>
        )
    }

}