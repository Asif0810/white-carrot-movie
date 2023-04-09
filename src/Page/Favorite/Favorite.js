import React, { useContext } from "react";
import { Context } from "../../AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
import FavoriteDetails from "./FavoriteDetails";

const Favorite = () => {
  const { user } = useContext(Context);
  const email = user?.email;
  const { data: favorites = [], refetch } = useQuery({
    queryKey: ["my-favorite", email],
    queryFn: () =>
      fetch(
        `https://movies-server-dusky.vercel.app/my-favorite?email=${email}`
      ).then((res) => res.json().catch(console.error())),
  });
  console.log(favorites);
  return (
    <div>
      <h2 className="text-4xl">Your Favorite List</h2>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12">
        {favorites.map((favorite) => (
          <FavoriteDetails
            key={favorite._id}
            favorite={favorite}
            refetch={refetch}
          ></FavoriteDetails>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
