import React from 'react';

function Card({cardTitle,cardDescription, buttonText,imgsrc}){
    return(
        <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img 
                src={imgsrc}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">
                  {cardDescription}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
            </div>
          </div>
    );
}

export default Card;