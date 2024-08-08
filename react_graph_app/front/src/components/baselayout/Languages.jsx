import axios from "axios";
import React, { useEffect, useState } from "react";
import { REST_COUNTRIES_API_URL } from "../../constants/apiUrl";
import { Icons } from "../../assets/icons";

const Languages = () => {
  const DEFAULT_COUNTRY = "South Korea";
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropOpen, setIsDropOpen] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(REST_COUNTRIES_API_URL);

        const sortedCountries = response.data.sort((a, b) => {
          return a[0] === b[0] && a.name.common.localeCompare(b.name.common);
        });

        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country.name.common === DEFAULT_COUNTRY
        );

        //Object.keys() 메서드는 객체(typeof 연산자로 확인했을 때 object가 반환되는)의 프로퍼티들 중에서 key값, 다른 말로 프로퍼티 네임들만 묶어서 배열로 반환하는 메서드이다.
        if (defaultCountry) {
          const langKey = Object.keys(defaultCountry.languages)[0];
          setSelectedCountry({
            country: defaultCountry.name.common,
            flag: defaultCountry.flags.png,
            language: langKey,
          });
        }
      } catch (error) {
        console.log("Error Fetching Country Data:", error);
      }
    };
    fetchCountryData();
  }, []);

  const handleDropList = () => setIsDropOpen(!isDropOpen);

  // 자바스크립트 객체에서는 키와 값이 같을경우, 키와 값중 하나만 쓸수 있다.
  const handleSelected = (country, flag, language) => {
    setSelectedCountry({ country, flag, language });
    // setSelectedCountry({
    //   country: country,
    //   flag: flag,
    //   language: language,
    // });
  };

  return (
    <div className="w-30 h-10 mx-7 relative" onClick={handleDropList}>
      <div className="dropdown-default w-full h-full cursor-pointer px-1 py-3 flex items-start gap-x-3">
        <div className="dropdown-img w-6 h-6 overflow-hidden rounded-full">
          <img
            src={selectedCountry?.flag} // optional chaining: 물음표를 사용하여 만약 데이터가 없더라도 에러를 발생시키지 않는다.
            alt=""
            className="w-6 h-6 object-cover"
          />
        </div>
        <div className="dropdown-text flex items-center gap-x-2">
          <span>{selectedCountry?.language}</span>
          <img
            src={Icons.ChevronDownDark}
            alt=""
            className="invert-[1] brightness-[100%]"
          />
        </div>
      </div>

      <div
        className={`dropdown-all absolute top-full w-full left-0 py-2 px-0 bg-gray-900 shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] rounded-sm
          ${isDropOpen ? "" : "hidden"}`}
      >
        <div className="drop-lists-wrapper max-h-52 py-6 px-3 overflow-y-scroll">
          {countries.map((country, idx) => {
            if (country.languages && Object.keys(country.languages)) {
              const langKey = Object.keys(country.languages)[0];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-700 py-1 px-1"
                  onClick={() =>
                    handleSelected(
                      country.name.common,
                      country.flags.png,
                      langKey
                    )
                  }
                >
                  <span className="w-4 h-4 overflow-hidden rounded-full">
                    <img
                      src={country.flags.png}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span>{langKey}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
