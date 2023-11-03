import React, { useEffect, useState } from "react";

const Slider = ({ data, id, setId }) => {
  const [src, setSrc] = useState(
    "https://d33zkbf3uttm0b.cloudfront.net/v/BLAASH/2dff524d-37e8-443d-a4f2-c69d864d4879.mp4"
  );

  const fetchFeed = async () => {
    const res = await fetch(
      `https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getPostContent?eid=${id}`,
      {
        headers: {
          "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
          "x-tenant-key": "BLAASH1122",
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    setSrc(result.data[0].Url);
    const video = document.getElementById("my_video");
    video.src = result.data[0].Url;
  };
  useEffect(() => {
    fetchFeed();
  }, [id]);

  const handleLeft = () => {
    if (id > 2327) {
      setId((prev) => prev - 1);
    } else {
      setId(2331);
    }
  };
  const handleRight = () => {
    if (id < 2331) {
      setId((prev) => prev + 1);
    } else {
      setId(2327);
    }
  };

  return (
    <div className="slider_container">
      {data.map((val, idx) => (
        <video
          style={{
            position: "absolute",
            top: "10vh",
            left: `${idx * 140}px`,
            height: "80vh",
          }}
          onClick={() => setId(val.EngagementPostId)}
        >
          <source src={val.Thumbnail_URL} type="video/mp4" />
        </video>
      ))}

      {src ? (
        <div className="main_slide">
          <video id="my_video" autoPlay controls loop>
            <source src={src} type="video/mp4" />
          </video>
          <button>Buy Now</button>
        </div>
      ) : (
        <p></p>
      )}
      <div className="icon">
        <i
          onClick={handleLeft}
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "5px",
            top: "50vh",
            backgroundColor: "gray",
            padding: "10px",
            color: "#fff",
          }}
          class="fa-solid fa-chevron-left"
        ></i>
        <i
          onClick={handleRight}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "5px",
            top: "50vh",
            backgroundColor: "gray",
            padding: "10px",
            color: "#fff",
          }}
          class="fa-solid fa-chevron-right"
        ></i>
      </div>
    </div>
  );
};

export default Slider;
