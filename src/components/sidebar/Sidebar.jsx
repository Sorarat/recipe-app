import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    // <div className='col-md-3 bg-dark sidebar'>
    //     <div>
    //         <h2>Meal Type</h2>
    //         <div className='btn-group-vertical'>
    //             <button type="button" className='btn btn-primary'>Breakfast</button>
    //             <button type="button" className='btn btn-primary'>Lunch</button>
    //             <button type="button" className='btn btn-primary'>Dinner</button>
    //         </div>
    //     </div>
    //     <div>
    //         <h2>Dish Type</h2>
    //         <div className='btn-group-vertical'>
    //             <button type="button" className='btn btn-primary'>Starter</button>
    //             <button type="button" className='btn btn-primary'>Main</button>
    //             <button type="button" className='btn btn-primary'>Pasta</button>
    //             <button type="button" className='btn btn-primary'>Dessert</button>
    //         </div>
    //     </div>
    //     <div>
    //         <h2>Cuisine Type</h2>
    //         <div className='btn-group-vertical'>
    //             <button type="button" className='btn btn-primary'>American</button>
    //             <button type="button" className='btn btn-primary'>Asian</button>
    //             <button type="button" className='btn btn-primary'>European</button>
    //             <button type="button" className='btn btn-primary'>Middle Eastern</button>
    //             <button type="button" className='btn btn-primary'>Mediterranean</button>
    //         </div>
    //     </div>
    // </div>

    <div className='sidebar-container'>
        <h4>Meal Type</h4>
        <div className='btn-group-vertical'>
            <button type="button" className='btn btn-primary'>Breakfast</button>
            <button type="button" className='btn btn-primary'>Lunch</button>
            <button tyspe="button" className='btn btn-primary'>Dinner</button>
        </div>
        <h4>Dish Type</h4>
        <div className='btn-group-vertical'>
            <button type="button" className='btn btn-primary'>Starter</button>
            <button type="button" className='btn btn-primary'>Main</button>
            <button type="button" className='btn btn-primary'>Pasta</button>
            <button type="button" className='btn btn-primary'>Dessert</button>
        </div>
        <h4>Cuisine Type</h4>
        <div className='btn-group-vertical'>
            <button type="button" className='btn btn-primary'>American</button>
            <button type="button" className='btn btn-primary'>Asian</button>
            <button type="button" className='btn btn-primary'>European</button>
            <button type="button" className='btn btn-primary'>Middle Eastern</button>
            <button type="button" className='btn btn-primary'>Mediterranean</button>
        </div>
    </div>
    
  )
}

export default Sidebar