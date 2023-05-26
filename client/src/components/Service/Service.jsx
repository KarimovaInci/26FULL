import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./Service.scss";

const Service = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [isAscending, setisAscending] = useState(true);
  const [dummy, setdummy] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/drimo").then((res) => {
      setData(res.data);
      setdummy(false)
    });
  }, [searchValue === "", dummy ? data : ""]);
  return (
    <>
      <div className="service">
        <div className="service__title">
          <h2>OUR SERVICE</h2>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          </p>
        </div>
       <div className="search">
       <input
          type="text"
          placeholder="search for..."
          onChange={(e) => {
            setSearchValue(e.target.value);
            setData(data.filter((item) => item.title.includes(searchValue)));
          }}
        />
        <button
          onClick={() => {
            const sortedData = [...data].sort((a, b) => {
              if (isAscending) {
                return a.price - b.price;
              } else {
                return b.price - a.price;
              }
            });
            setData(sortedData)
            setisAscending(!isAscending)
          }}
        >
          Sort by price
        </button>
       </div>
        <div className="service__cards">
          {data.map((item, index) => {
            return (
              <div className="service__cards__card" key={index}>
                <div className="service__cards__card__img">
                  <img src={item.image} alt="" />
                </div>
                <div className="service__cards__card__body">
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                  <p className="price">{item.price}</p>
                  <div className="btns">
                    <button
                      onClick={() => {
                        axios
                          .delete(`http://localhost:8080/drimo/${item._id}`)
                          .then((res) => {
                            toast.success("item deleted");
                            setdummy(true)
                          });
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`${item._id}`}>Go to detail</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Service;
