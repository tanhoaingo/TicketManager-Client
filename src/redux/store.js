import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import filterTicketSlice from "../slices/filterTicketSlice";

import routeSlice from "../slices/routeSlice";
import seatBookingSlice from "../slices/seatBookingSlice";
import tripSlice from "../slices/tripSlice";

const store = configureStore({
  reducer: {
    routehaha: routeSlice.reducer,
    routeAuth: authSlice,
    trip: tripSlice,
    filter: filterTicketSlice,
    seatChoosing: seatBookingSlice,
  },
});

export default store;
