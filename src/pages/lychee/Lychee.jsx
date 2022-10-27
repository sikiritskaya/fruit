import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://api.predic8.de/shop/products/15";
const Lychee = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios.get(URL).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    !!info && (
      <>
        <div>Name {info.name}</div>
        <div>Price {info.price}</div>
        <div>Photo {info.photo_url} </div>
        <div>Category {info.category_url}</div>
        <div>Vendor {info.vendor_url}</div>
      </>
    )
  );
};

export default Lychee;
