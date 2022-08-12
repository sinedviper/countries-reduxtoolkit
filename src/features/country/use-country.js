import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { selectVisibleCountries, selectCountriesInfo } from "./country-slice";
import { loadCountries } from "./country-slice";
import { selectControls } from "../controls/controls-slice";

export const useCountry = () => {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error }];
};
