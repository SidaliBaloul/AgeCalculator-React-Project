import { createSlice } from "@reduxjs/toolkit";

export const AgeCalcSlice = createSlice({
  name: "AgeCalculator",
  initialState: {
    years: "--",
    months: "--",
    days: "--",
    alertBar: {
      alertSeverity: "info",
      alertMessage: "Tip: Choose a birth date and press “Calculate Age”",
    },
    results: "waiting...",
  },
  reducers: {
    calculate: (currentState, action) => {
      const birthDate = new Date(action.payload.birthDate);
      const formattedDate = new Date();

      if (isNaN(birthDate.getTime())) {
        currentState.alertBar.alertSeverity = "error";
        currentState.alertBar.alertMessage =
          "Please select your birth date first.";
      } else if (formattedDate < birthDate) {
        currentState.alertBar.alertSeverity = "error";
        currentState.alertBar.alertMessage =
          "Birth date cannot be in the future.";
      } else {
        const today = new Date();

        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        let years = currentYear - birthDate.getFullYear();
        let months = currentMonth - birthDate.getMonth();
        let days = currentDay - birthDate.getDate();

        if (days < 0) {
          const prevMonthIndex = (today.getMonth() - 1 + 12) % 12;

          const prevMonthYear =
            today.getMonth() === 0
              ? today.getFullYear() - 1
              : today.getFullYear();

          const prevMonthDays = new Date(
            prevMonthYear,
            prevMonthIndex + 1,
            0,
          ).getDate();

          days += prevMonthDays;
          months -= 1;
        }

        if (months < 0) {
          months += 12;
          years -= 1;
        }

        currentState.years = years;
        currentState.months = months;
        currentState.days = days;

        currentState.results = "Calculated ✅";
        currentState.alertBar.alertSeverity = "success";
        currentState.alertBar.alertMessage = "Age Calculated Sucessfully.";
      }
    },

    clear: (currentState, action) => {
      currentState.alertBar.alertSeverity = "info";
      currentState.alertBar.alertMessage =
        "Tip: Choose a birth date and press “Calculate Age”.";

      currentState.days = "--";
      currentState.years = "--";
      currentState.months = "--";

      currentState.results = "waiting...";
    },
  },
});

export const { calculate, clear } = AgeCalcSlice.actions;

export default AgeCalcSlice.reducer;
