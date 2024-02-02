import { selector } from "recoil";
import countState from "./Count";

const evenOddState = selector({
  key: "evenOddState",
  get: ({ get }) => {
    const count = get(countState);
    if (count % 2 == 0) {
      return "This is even";
    } else {
      return "This is odd";
    }
  },
});

export default evenOddState;
