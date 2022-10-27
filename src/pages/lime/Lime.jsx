import { useState } from "react";

const Lime = () => {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setWeight(e.target.value);
    setResult(e.target.value*0.3/2300*100)
  };
  return (
    <div>
      <label> the weight of lime</label>
      <input type="text" value={weight} onChange={handleChange}></input>
      <h2>Result {result} </h2>
    </div>
  );
};

export default Lime;
