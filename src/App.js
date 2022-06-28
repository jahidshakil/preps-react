import './App.css';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [news, setNews] = useState([]);
  const getApi = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2").then((res) => {
    setNews(res.data.articles)
      console.log(res);
  })
  }
  return (
    <div className="App">
      <button className='btn btn-primary' onClick={getApi}>Click For API</button>
      <div>
        {
          news.map((value) => {
            return (
              <div>
                <div className="text-primary">
                {value.author}
                </div>
                <div>
                  {value.title}
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  );
}

export default App;
