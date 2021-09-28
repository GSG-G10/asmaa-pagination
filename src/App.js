import './App.css';
import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

import { getPages } from './utils/getPages';

function App() {
  const [pages, setPages] = useState(100);
  const [err, setError] = useState(null);

  useEffect(() => {
    getPages()
    .then((data => {
      if(data && data.total_pages){
        setPages(data.total_pages)
      }
    }))
    .catch((err) => setError(err))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Pagination defaultCurrent={1} total={pages} />
    </div>
  );
}

export default App;
