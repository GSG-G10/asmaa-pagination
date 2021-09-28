import "./App.css";
import { useState, useEffect } from "react";
import { Pagination } from "antd";

import { getPages } from "./utils/getPages";
import PicsCard from "./Components/PicsCard";

function App() {
  const [totalPages, setTotalPages] = useState(100);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [picsResults, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPages(page)
      .then((data) => {
        console.log(data);
        if (data && data.total_pages) {
          console.log(data.total_pages);
          setTotalPages(data.total_pages);
          setResults(data.results);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="App">
      {error ? (
        <p>Unable to retrieve results.</p>
      ) : (
        <PicsCard results={picsResults} loading={loading} />
      )}
      <Pagination
        onChange={(value) => setPage(value)}
        defaultCurrent={1}
        total={totalPages}
      />
    </div>
  );
}

export default App;
