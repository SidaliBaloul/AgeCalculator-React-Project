import "../Styles/MyStyles.css";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { calculate, clear } from "../Features/AgeCalcSlice";

export default function Inputs() {
  let [mydate, setMydate] = useState();

  let alertSeverity = useSelector((state) => state.calc.alertBar.alertSeverity);
  let alertMessage = useSelector((state) => state.calc.alertBar.alertMessage);

  let dispatch = useDispatch();

  function handleCalculateAge() {
    dispatch(calculate({ birthDate: mydate }));
  }

  function handleClear() {
    dispatch(clear({ birthDate: mydate }));
  }

  return (
    <section class="card">
      <div class="cardHead">
        <h2>🧾 Inputs</h2>
        <span class="chip">Modern UI • React JS</span>
      </div>

      <div class="cardBody">
        <label>
          <div class="labelRow">
            <span>Birth Date</span>
            <span>(Required)</span>
          </div>

          <input type="date" onChange={(e) => setMydate(e.target.value)} />
        </label>

        <div class="btnRow">
          <button class="primary" onClick={handleCalculateAge}>
            Calculate Age
          </button>
          <button onClick={handleClear}>Clear</button>
        </div>

        {/* <div class="msg" id="msgBox">
          Tip: Choose a birth date and press “Calculate Age”.
        </div> */}

        <Alert variant="outlined" severity={alertSeverity}>
          {alertMessage}
        </Alert>

        <div class="hint">
          🔹 Calculation is based on actual calendar rules (months length, leap
          years).
          <br />
          🔹 “Next Birthday” countdown shows how many days remain.
        </div>
      </div>
    </section>
  );
}
