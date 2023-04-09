import React, { useContext } from "react";
import { HiHeart } from "react-icons/hi";
import { Context } from "../../AuthContext/AuthContext";
import { toast } from "react-hot-toast";
const HomeDetails = ({ movie }) => {
  const { _id, title, poster, genres } = movie;
  const { user, google } = useContext(Context);
  const email = user?.email;
  const addFavoriteHander = (movie) => {
    console.log(movie);
    const poster = movie.poster;
    const title = movie.title;
    const userEmail = email;
    const content = {
      poster,
      title,
      userEmail,
    };

    if (user?.email) {
      fetch("http://localhost:5000/favorite", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(content),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("favorite movie added succesfully");
          }
        })
        .catch(console.error());
    } else {
      toast.error("Please Login with Google Then add Favorite Movie!");
    }
  };
  return (
    <div>
      <div
        style={{ borderRadius: "0px" }}
        className="card card-compact h-[500px]  bg-base-100 shadow-xl"
      >
        <figure>
          <img src={poster} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p></p>
          <div className="card-actions   items-center justify-between">
            <button onClick={() => addFavoriteHander(movie)}>
              <HiHeart className="text-4xl text-red-800"></HiHeart>
            </button>
            <button
              style={{ borderRadius: "0px" }}
              className="btn bg-[#0E3672]"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
