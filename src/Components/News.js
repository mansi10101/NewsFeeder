import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import  PropTypes from 'prop-types'
import blankimg from '../blankimg.png'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  console.log("props",props.apiKey)

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  // onUpdate=()=>{window.scrollTo(0, 0)}
  const updateNews =  async () =>  {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
     window.scrollTo(0, 0);
     setArticles(parsedData.articles);
     setTotalResults(parsedData.totalResults)
     setLoading(false);
  }


  useEffect(() => {
    updateNews()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  // const handlePrevClick = async () =>{
  //   setPage(page - 1)
  //   updateNews();
  // }

  // const handleNextClick = async () =>{
  //   setPage(page + 1)
  //   updateNews();
  // }
 
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
    return (
      <>
          <h2 style={{textAlign:"center",color:"red", marginTop:"100px"}}> NewsFeeder - Top {props.category} Headlines</h2>
          {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length ? articles.length : 0}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>} 
          >

        <div className="container">

        <div className="row" style={{marginTop:"40px"}}>
        {articles.map((element) =>{
            return  <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,150):""} imgUrl={!element.urlToImage?blankimg:element.urlToImage} newsurl={element.url} author={element.author} date={parseInt(element.publishedAt)} />
          </div>
        }) }
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: "in",
  pagesize: 12,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
} 
export default News
