import { create } from "zustand";

const generalStore = create(() => ({
  showFilterUI: false,
}));


export default generalStore