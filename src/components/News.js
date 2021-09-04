import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:6,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c62098a018454eb99e22adacfefd3405&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json(data)
        this.setState({ articles: parsedData.articles,totalResult: parsedData.totalResult })
        this.setState({loading:false})
    }
    render() {
        return (
            <>
               
            <div className="container my-3" >
                <h1 className="text-center"> 
                Instant news - top headlines

                </h1>
                
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem  date={element.publishedAt} title={element.title} source={element.source.name} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author}  />
                        </div>
                    })}
                </div>
            </div>
            {this.state.loading && <Spinner />}
</>
        )
    }
}

export default News
