import React, { useEffect, useState } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
import Pager from "./Pager";

const Home = () => {
  const [list, setList] = useState();
let [page, setPage] = useState(1)


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=46f7181e724eb2edbb82493babb26fef&language=en-US&page=${page}`
      )

      .then(({ data }) => setList(data.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
            <div className="container">
        <div className="grid">
          {list && list.map((movie) => <Moviecard list={movie} />)}
        </div>
        <Pager page={page} setPage={setPage}/>
      </div>
    </div>
  );
};

export default Home;
