import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div class="row">
                <img src="./0.jpg" class="rounded  mx-auto d-block" alt="Cinque Terre" width="400" height="600"></img>
                <div class="col-12">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <NavLink to="/home" className="list-group-item">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/book" className="list-group-item">Book</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/management" className="list-group-item">Management</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home