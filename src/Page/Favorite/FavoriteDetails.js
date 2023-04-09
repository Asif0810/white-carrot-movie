import React from "react";
import { toast } from "react-hot-toast";

const FavoriteDetails = ({ favorite, refetch }) => {
  console.log(favorite);
  const { poster, title, _id } = favorite;
  const deleteHandler = (_id) => {
    fetch(`https://movies-server-dusky.vercel.app/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("remove");
          refetch();
        }
      })
      .catch(console.error());
  };
  return (
    <div>
      <div>
        <div
          style={{ borderRadius: "0px" }}
          className="card card-compact w-[300px]  h-[400px]  bg-base-100 shadow-xl"
        >
          <figure>
            <img src={poster} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p></p>
            <div className="card-actions   items-center justify-between"></div>
          </div>
          <button onClick={() => deleteHandler(_id)} className="btn">
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDetails;
