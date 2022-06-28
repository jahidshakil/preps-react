import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const API = () => {

  const [news, setNews] = useState([]);
  const getApi = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2").then((res) => {
    setNews(res.data.articles)
      console.log(res);
  })
  }
  return (
   
    <div >
       <button className='btn btn-primary' onClick={getApi}>Click For API</button>
      <div>
        {
          news.map((value) => {
            return (
              <div>
                <div className="text-primary">
                {value.author}
                </div>
                <div className='text-success'>
                  {value.title}
                </div>
                <div className='text-warning'>
                  {value.description}
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default API