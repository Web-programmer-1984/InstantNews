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
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category}&apikey=c62098a018454eb99e22adacfefd3405&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json(data)
        this.setState({ articles: parsedData.articles })
        this.setState({loading:false})
    }
    handleNextClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category}&apikey=c62098a018454eb99e22adacfefd3405&page=${this.state.page +1}&pagesize=${this.props.pageSize}`;
            this.setState({
                page: this.state.page + 1
            })
            let data = await fetch(url)
            let parsedData = await data.json(data)
            this.setState({ articles: parsedData.articles })
    }
    render() {
        return (
            <>
               
            <div className="container my-3" >
                <h1 className="text-center"> 
                Instant news - top headlines

                </h1>
                {this.state.loading && <Spinner />}
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page>6} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
                    </div>
                </div>
            </div>
</>
        )
    }
}

export default News
