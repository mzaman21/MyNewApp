import React from 'react'

const NewsItem = (props)=>{
    let {title, desc,ImageUrl,url,author,date, source} = props
    return (
      <div>
        <div className="card my-3" style={{width:"18rem"}}>
            <img src={!ImageUrl?"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png":ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                 {source}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <p className="card-text">{desc}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Admin"} on {new Date(date).toDateString()}</small></p>
                <a href={url} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}
export default NewsItem