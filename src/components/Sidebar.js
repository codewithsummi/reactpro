import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
  <li className="list-group-item active">
      <Link to="/category">Category</Link>
  </li>
  <li className="list-group-item">Products</li>
  <li className="list-group-item">Feedback</li>
</ul>
            </div>
        )
    }
}

export default Sidebar
