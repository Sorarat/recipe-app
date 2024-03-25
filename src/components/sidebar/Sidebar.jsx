import React from 'react'
import "./sidebar.css"
import {Container, Row, Col} from 'react-bootstrap'
import RecipeCard from '../recipecard/recipeCard'

const Sidebar = () => {
  return (

    <Container fluid>
        <Row>
            <Col xs={4} md={2}  style={{backgroundColor: 'purple'}}>
                Sidebar
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