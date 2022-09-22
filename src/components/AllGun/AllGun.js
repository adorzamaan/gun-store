import React, { useEffect, useState } from "react";
import DisplayGun from "../DisplayGun/DisplayGun";

const AllGun = ({ increaseCount }) => {
  const [guns, setGuns] = useState([]);
  //   console.log(guns);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div>
      <div className="py-12 sm:px-9 lg:w-8/12 mx-auto">
        <h3 className="text-3xl sm:text-2xl font-bold py-3">
          Welcome To Gun Store
        </h3>
        <p className="sm:text-1xl">
          A gun shop (also known by various other names such as firearm store
          and gun store) is a business establishment that sells small arms, such
          as handguns and shotguns,
        </p>
      </div>
      <div className="container mx-auto grid lg:px-20 lg:grid-cols-3 sm:grid-cols-2 gap-12 justify-center">
        {guns.map((gun) => (
          <DisplayGun gun={gun} increaseCount={increaseCount}></DisplayGun>
        ))}
      </div>
    </div>
  );
};

export default AllGun;
