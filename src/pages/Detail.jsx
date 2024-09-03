import React from "react";
import Navbar from "../component/Navbar";
import DetailCard from "../component/DetailCard";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <DetailCard id={id} />
    </div>
  );
};

export default Detail;
