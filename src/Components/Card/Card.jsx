import React from 'react'
import "./Card.css"
function Card() {
    return (
        <div className="card">
            <div className="cardOne">
                <img src="https://www.sap.com/content/dam/application/imagelibrary/pictograms/281000/281105-pictogram-neg-blue.svg" alt="" />
                 <h2>Turning adversity into advatage</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione fugiat eius nisi modi voluptates.</p>
                 <button>Register for the Sap. 21 webcaste </button>
            </div>
            <div className="cardOne">
                <img src="https://www.sap.com/content/dam/application/imagelibrary/pictograms/287000/287357-pictogram-neg-green.svg" alt="" />
              <h2>Industry recognition</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus sunt alias quo, odit veniam dolorum.</p>
              <button>Download the Gartner report</button>
            </div>
            <div className="cardOne">
                <img src="https://www.sap.com/content/dam/application/imagelibrary/pictograms/288000/288150-pictogram-neg-green.svg" alt="" />
             <h2>SAP, a 2021 IDC Leander</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci aut quaerat distinctio, maiores suscipit.</p>
             <button>Read the IDC MarketScape report</button>
            </div>
        </div>
    )
}
export default Card
