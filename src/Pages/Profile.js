import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


const Profile = ({Persons}) => {
  const navigate= useNavigate()
  const {idUser} = useParams()
  const foundUser = Persons.find(el=> el.id === +idUser)
  
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{foundUser.name}</ListGroup.Item>
        <ListGroup.Item>{foundUser.age}</ListGroup.Item>
        <ListGroup.Item>{foundUser.Adress}</ListGroup.Item>
      </ListGroup>
    </Card>
    <Button variant="primary" onClick={()=>navigate('/')}>GO BACK TO HOME</Button>
    </div>
  )
}

export default Profile