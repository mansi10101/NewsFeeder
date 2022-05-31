import React from 'react'
import LastSeen from './LastSeen';

const NewsItem = (props) => {
      let {title,description,imgUrl,newsurl,author,date} = props;
      const myStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
      const imgstyle = {
        width: "100%",
        height: "240px"
        // objectFit:"cover"
        // maxHeight: "50px"
      }
        //height:"13vw"
    return (
      <div>
        <div className="card my-3 shadow bg-white rounded">
            <div className="image" style={imgstyle} ><img src={imgUrl} alt="..." className="card-img-top img-fluid" style={{width:"100%",height:"100%",objectFit:"fill"}} /></div>
            <div className="card-body">
                <h5 style={myStyle} className="card-title"> {title}.....</h5>
                <p style={myStyle} className="card-text">{description}.....</p>
                <p className="card-text"><small className='text-muted'> By {author?author:"Unknown"}<LastSeen date={date} /></small></p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
             </div>
        </div>
      </div>
    )
}

export default NewsItem
