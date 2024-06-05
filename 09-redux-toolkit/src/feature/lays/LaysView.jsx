import { useSelector, useDispatch } from "react-redux";
import { addStock, order } from "./laysSlice.js";
import { useState } from "react";

const LaysView = () => {
  const [numLays, setNumLays] = useState(1);
  const { numOfLays } = useSelector((state) => state.lays);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Stock lays : {numOfLays}</h1>
      <input
        type="number"
        value={numLays}
        onChange={(e) => setNumLays(e.target.value)}
      />
      <button onClick={() => dispatch(order(numLays))}>buy lays</button>
      <button onClick={() => dispatch(addStock(10))}>restock lays</button>
    </div>
  );
};

export default LaysView;
