import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, setId }) => {
  return (
    <div className="app_container">
      {data ? (
        data.map((val, idx) => (
          <div key={idx} className="card">
            <Link to='/slider'><video
              onClick={() => setId(val.EngagementPostId)}
              autoPlay
              muted
              loop
            >
              <source src={val.Thumbnail_URL} type="video/mp4" />
            </video></Link>
            <div>{val.Thumbnail_Title}</div>
          </div>
        ))
      ) : (
        <p>no data found!</p>
      )}
    </div>
  );
};

export default Home;
