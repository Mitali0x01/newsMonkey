import React, { Component } from 'react'

const NewsItem = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={!imageUrl?"https://d3i6fh83elv35t.cloudfront.net/static/2025/09/2025-07-17T050052Z_655252093_RC228EA581OD_RTRMADP_3_UKRAINE-CRISIS-DEFENCES-1200x811.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" target="_blank" href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
               <p> <small className="text-body-secondary">By {!author?"unknown author":author} on {new Date(date).toGMTString()}</small></p>
            </div>
          </div>
      </div>
    )
  }

export default NewsItem;
