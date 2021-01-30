import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap';
import searchLogic from '../logic/searchLogic'



export default function EmployeeCard(props) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [employees, setEmployees] = useState([])
    const [empFiltered, setEmpFiltered] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(
            (results) => {
                setEmployees(results.results)
                setEmpFiltered(results.results, '', 'NOPE')
                setIsLoaded(true)
            },
            (error) => {
                setError(error)
                setIsLoaded(true)
            }
        )
    }, [])

    useEffect(
        () => {
            setEmpFiltered(searchLogic(employees, props.searchInput, props.activeSearchType))
        },
        [props.searchInput, props.activeSearchType, employees]
    )

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
        <>
            {empFiltered.map(emp => (
                <Card key={emp.login.uuid}>
                    <Card.Body>
                        <Card.Title>{emp.name.title} {emp.name.first} {emp.name.last}</Card.Title>
                        <Image src={emp.picture.medium} roundedCircle/>
                        <Card.Text>{emp.location.postcode}</Card.Text>
                    </Card.Body>
                </Card>

            ))}
        </>
        )
    }

}
