import React, { Component } from 'react'


//all news items will be exported in the NewsContainer components
export class NewsItems extends Component {
  
  render() {
   let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div> 
        
        <div className="card " style={{width: "18rem" , margin: "16px"}}>
                <img src={imageUrl} className="card-img-top" alt={imageUrl}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                  <p><strong>Author: </strong>{author} </p>
                  <p><strong>Published at:</strong> {date}</p>
                </div>
                </div>
      </div>
    )
  }
}

export default NewsItems

