import { useDispatch, useSelector } from "react-redux";

import { selectSearch } from "./controls-slice";
import { setSearch } from "./controls-slice";

export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => selectSearch(state));

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [handleSearch, search];
};
