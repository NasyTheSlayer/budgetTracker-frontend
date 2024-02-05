import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
  baseURL: "https://budgettracker-6jgk.onrender.com/api",
  headers: {
    Authorization: "Bearer " + getTokenFromLocalStorage() || "",
  },
});
