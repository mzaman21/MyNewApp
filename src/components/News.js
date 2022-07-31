import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props)=> {
  
  const [articles,setAritcles]=useState([]);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  
  const capetalize = (astring)=>{
    return astring.charAt(0).toUpperCase()+astring.slice(1);
  }
  document.title= `${capetalize(props.category)}- My News App` 

  const UpdateNews=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let ardata = await data.json(); 
    console.log(ardata);
    setAritcles(ardata.articles);
    setTotalResults(ardata.totalResults)
  }

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

 
  const handlenext = async()=>{
    console.log("next clicked")
    setPage(page+1);
    UpdateNews();
  }

  const handleprev = async()=>{
    setPage(page-1);
    UpdateNews();
  }

    return (
      <div>
        <div className='container my-4'>
          <div className='row'>
            <div className='col-md-12' style={{marginTop:"50px"}}>
              <h1>Today Top Trending on {capetalize(props.category)}</h1>
            </div>
          </div>
          <div className='row my-3'>
            {articles.map((narticale)=>{
               return <div className='col-md-4' key={narticale.url}>
               <NewsItem title={narticale.title} desc={narticale.description} ImageUrl={narticale.urlToImage} url={narticale.url} author={narticale.author} date={narticale.publishedAt} source={narticale.source.name}/>
               </div>
            })}
          </div>
          <div className="cotainer d-flex justify-content-between">
            <button type="button" disabled={page<=1} className="btn btn-primary" onClick={handleprev}>&larr; Previous</button>
            <button type="button" disabled={page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-primary" onClick={handlenext}>Next &rarr;</button>
        </div>
        </div>
      
      </div>
    )
  
}

News.defaultProps= {
  country:'us',
  pageSize:12,
  category:"Science"
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News