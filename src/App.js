import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from './Slider';

const App = () => {
  const [data, setData] = useState();
  const [id, setId] = useState()

  useEffect(() => {
    fetch(
      "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
      {
        method: "post",
        headers: {
          "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
          "x-tenant-key": "BLAASH1122",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Index: 1,
          ContentType: [2],
          ProductCategory: [],
          PlayListCode: "XL7OXUUX_638264173348576143",
          IsTagged: false,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => setData(res.data.Feeds));
  }, []);

  // console.log(data);
  return (
  
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data} setId={setId} />}/>
        <Route path='/slider' element={<Slider data={data} id={id} setId={setId}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
