import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export default function SearchTypeButton(props) {
    const styles = {
        btn: {
            color: 'white',
            background: 'grey'
        },
        active: {
            color: 'black',
            background: 'white'
        }
    }

    return (
        <ButtonGroup style={styles.btn}>
            <Button style={props.activeSearchType === 'fname' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('fname')}>Fist Name</Button>
            <Button style={props.activeSearchType === 'lname' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('lname')}>Last Name</Button>
            <Button style={props.activeSearchType === 'postal' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('postal')}>Postal Code</Button>
            <Button style={props.activeSearchType === 'phone' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('phone')}>Phone Number</Button>
            <Button style={props.activeSearchType === 'email' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('email')}>Email</Button>
            <Button style={props.activeSearchType === 'gender' ? styles.active : styles.btn} onClick={() => props.setActiveSearchType('gender')}>Gender</Button>
        </ButtonGroup>
    )
}
