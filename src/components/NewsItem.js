
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        debugger;
        let { title, description, imgurl, newsUrl, author, date, source } = this.props;
        let splitTitle = title.slice(0, 70)
        return (
            <div className="my-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imgurl ? imgurl : "https://images.hindustantimes.com/img/2021/08/27/550x309/BREAKING_NEWS_1630107128976_1630107133114.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body"style={{ height: '420px' }}>
                        <h5 className="card-title">{splitTitle}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span></h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Ayush shukla"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
