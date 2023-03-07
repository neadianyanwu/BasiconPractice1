import "./Measurements.css";

import React from "react";

const Measurements = () => {

  return (
    <div className="size">
        <h4 className="heading">Size</h4>
        <table>
            <tr className="column">
                <th className="item">16</th>
                <th className="item">24</th>
                <th className="item">32</th>
            </tr>
        </table>
        <h4 className="heading">Stroke</h4>
        <table>
            <tr className="column">
                <th className="item">1</th>
                <th className="item">1.5</th>
                <th className="item">2</th>
            </tr>
        </table>
    </div>
    
    
  )
}

export default Measurements;