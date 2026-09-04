import { useDispatch, useSelector } from "react-redux";
import {
  tambahCounter,
  kurangCounter,
} from "../redux/counter/naikTurunSlice";

export default function CounterNaikTurun() {
  const { totalCounter } = useSelector(
    (state: { counter: { totalCounter: number } }) => state.counter
  );

  const dispatch = useDispatch();

  function tombolTambah() {
    dispatch(tambahCounter());
  }

  function tombolKurang() {
    if (totalCounter > 0) {
      dispatch(kurangCounter());
    } else {
      alert("Minimal 0");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h3>Counter</h3>
            </div>

            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center gap-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={tombolKurang}
                >
                  -
                </button>

                <h2 className="mb-0">{totalCounter}</h2>

                <button
                  className="btn btn-outline-primary"
                  onClick={tombolTambah}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}