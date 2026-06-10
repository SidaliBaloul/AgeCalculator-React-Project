import "../Styles/MyStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { calculate, clear } from "../Features/AgeCalcSlice";

export default function Results() {
  let result = useSelector((state) => state.calc.results);
  let year = useSelector((state) => state.calc.years);
  let month = useSelector((state) => state.calc.months);
  let day = useSelector((state) => state.calc.days);

  let dispatch = useDispatch();

  return (
    <section class="card">
      <div class="cardHead">
        <h2>📊 Results</h2>

        <span class="chip" id="statusChip">
          {result}
        </span>
      </div>

      <div class="cardBody stats">
        <div class="statGrid">
          <div class="stat">
            <div class="k">Years</div>
            <div class="v">{year}</div>
          </div>

          <div class="stat">
            <div class="k">Months</div>
            <div class="v">{month}</div>
          </div>

          <div class="stat">
            <div class="k">Days</div>
            <div class="v">{day}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
