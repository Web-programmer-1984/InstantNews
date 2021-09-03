
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgurl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgurl?imgurl:"https://images.hindustantimes.com/img/2021/08/27/550x309/BREAKING_NEWS_1630107128976_1630107133114.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}....</p>
                        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
