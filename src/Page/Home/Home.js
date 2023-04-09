import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import HomeDetails from "./HomeDetails";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: movies = [] } = useQuery({
    queryKey: ["all-movies"],
    queryFn: () =>
      fetch("http://localhost:5000/all-movies").then((res) => res.json()),
  });

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search your Movie"
        className="input my-[20px] input-bordered input-accent w-full max-w-xs"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12">
        {/* {movies.filter((movie) => {
          if (searchTerm == "") {
            return <HomeDetails key={movie._id} movie={movie}></HomeDetails>;
          } else if (
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return <HomeDetails key={movie._id} movie={movie}></HomeDetails>;
          }
        })} */}
        {movies
          .filter((movie) => {
            if (searchTerm == "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => (
            <HomeDetails key={movie._id} movie={movie}></HomeDetails>
          ))}
      </div>
    </div>
  );
};

export default Home;
