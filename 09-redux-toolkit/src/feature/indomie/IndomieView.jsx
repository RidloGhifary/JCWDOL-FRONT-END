import { useDispatch, useSelector } from "react-redux";
import { order, addStock } from "./indomieSlice";

const IndomieView = () => {
  const { numOfIndomie } = useSelector((state) => state.indomie);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Stock indomie : {numOfIndomie}</h1>
      <button onClick={() => dispatch(order())}>buy indomie</button>
      <button onClick={() => dispatch(addStock(10))}>restock indomie</button>
    </div>
  );
};

export default IndomieView;
