import React, {useEffect, useState} from "react";
import {Container,Card} from "react-bootstrap";
import './MonsterPage.style.css'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

const MonsterPage = () => {
    const params=useParams()
    const [monster,setMonster]=useState({
        "id": 1,
        "name": "",
        "username": "",
        "email": "",
        "phone": "",
        "website": "",
    })
    const getMonster=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterID}`)
            .then(response=>response.json())
                .then(data => setMonster(data))
    }
    useEffect(()=>{
        getMonster()
    },[])
    return (
        <Container>
            <Card>
                <Card.Title>
                    <Card.Body>
                        <img style={{
                            borderRadius:"50%",border:"2px solid black",
                        }} src={'https://robohash.org/' + monster.username} alt={"avatar"}/>
                            <Card.Title>{monster.name}</Card.Title>
                            <Card.Title>{monster.username}</Card.Title>
                            <Card.Title>{monster.email}</Card.Title>
                            </Card.Body>
                    <Link to={'/'} >Back to HOME</Link>
                </Card.Title>
            </Card>
        </Container>
    )
}
export default MonsterPage