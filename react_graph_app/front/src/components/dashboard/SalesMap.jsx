import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { fetchSalesMapData } from "../../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../constants/world-50m.v1.json";
import { COLOR_MAP } from "../../constants/menuLists";

const getFillColor = (fillCode) => COLOR_MAP[fillCode] || "#ececec";

const SalesMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.salesMapData);

  useEffect(() => {
    dispatch(fetchSalesMapData());
  }, [dispatch]);

  // geograpy 컴포넌트는 map으로부터 가져오므로 객체 타입아다.
  // filter는 배열을 반환하므로 사용할 수 없고, find를 사용하여야 한다.
  const findCountryId = (countryId) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryId
    );
    return matchedCountry ? getFillColor(matchedCountry.fill_color) : "#ececec";
  };

  return (
    <div className="w-[30%] px-[5px] py-[10px]">
      <div className="block-cell">
        <div className="header-wrapper">
          <HeadTitle title="Slase Mapping By Country" />
        </div>

        <div className="map-chart">
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{
              rotate: [0, 0, 0],
              scale: 200,
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={findCountryId(geo.id)}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default SalesMap;
