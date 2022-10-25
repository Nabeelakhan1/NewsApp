// import {Component} from "react";
import NewsItems from './NewsItems'
// import PropTypes from 'prop-types'

import React, { Component } from 'react'
import Spinner from './Spinner';

export class NewsContainer extends Component {
    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general'
      }
    //   static defaultProps = {
    //     country:PropTypes.string,
    //     category:PropTypes.string
    //   }

    constructor(){
        super();
        this.state={
            articles:[],
            page:1,
            loading:false
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b112179d342c4d9fb117db632914a1a1&page=1 &pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles,
             totalResults:parsedData.totalResults,
        loading:false})
        
    }

    // async updateNews(){
       
    //     this.props.setProgress(10);

    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b112179d342c4d9fb117db632914a1a1&page=${this.state.page+1} &pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
    
    //     this.setState({
    //         page:this.state.page+1,
    //         articles:parsedData.articles   ,
    //         loading:false 
    // })
    // this.props.setProgress(100);
    // }

    handleNext=async()=>{
        console.log("next has been clicked!");
        
       
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b112179d342c4d9fb117db632914a1a1&page=${this.state.page+1} &pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json();
       
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles   ,
            loading:false 
        })
        // this.setState({page:this.state.page-1});
        // this.updateNews()
    }

    handlePrev=async()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b112179d342c4d9fb117db632914a1a1&page=${this.state.page-1} &pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
       
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        })
        // this.setState({page:this.state.page+1});
        // this.updateNews()
       
        

    }
  render() {
    return (
        <div className="container">
           <div className="text-center"> <h1>NewsApp headlines</h1></div>
          <div className="text-center">
          { this.state.loading&&<Spinner />} 
          </div>
            <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description}
                            imageUrl={element.urlToImage} newsUrl={element.url} 
                            author={element.author} date={element.publishedAt}
                            />
                        </div>
                    })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}> Next&rarr;</button>
            </div>
        </div>
    )
  }
}

export default NewsContainer
