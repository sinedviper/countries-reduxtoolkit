import { useSelector, useDispatch } from "react-redux";

import { selectRegion } from "./controls-slice";
import { setRegion } from "./controls-slice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (region) => {
    dispatch(setRegion(region?.value || ""));
  };

  return [handleSelect, region];
};
