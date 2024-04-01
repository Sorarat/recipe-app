import React from 'react'
import "./sidebar.css"
import {Container, Row, Col, Button} from 'react-bootstrap'
import RecipeCard from '../recipecard/recipeCard'

const Sidebar = () => {
  return (

    <Container fluid>
        <Row>
            <Col xs={4} md={2}  style={{backgroundColor: '#4B0CF7'}}>
                <div className='sidebar-container'>
                    <div className='mealType'>
                        <h5>Meal Type</h5>
                        <Button className='btn-custom' size="lg"> Breakfast </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg">  Lunch </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Dinner </Button>
                    </div>

                    <div className='dishType'>
                        <h5>Dish Type</h5>
                        <Button className='btn-custom' size="lg"> Starter </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Main Course </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Pasta </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Dinner </Button>
                    </div>

                    <div className='cuisineType'>
                        <h5>Cuisine Type</h5>
                        <Button className='btn-custom' size="lg"> American </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Asian </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> European </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Middle Eastern </Button>
                        <br></br>
                        <Button className='btn-custom' size="lg"> Mediterranean </Button>
                    </div>
                </div>
            </Col>
            <Col xs={8} md={10} style={{backgroundColor: 'grey'}}>
                <Row>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
            
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
            
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
            
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                    <Col xs={12} md={4}>
                        <RecipeCard/>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    </Container>
    
    
  )
}

export default Sidebar