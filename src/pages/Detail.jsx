import React from "react";
import DetailCard from "../component/DetailCard";
import { useParams } from "react-router-dom";
import NavbarComp from "../component/NavbarComp";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <NavbarComp />
      <DetailCard id={id} />
    </div>
  );
};

export default Detail;
