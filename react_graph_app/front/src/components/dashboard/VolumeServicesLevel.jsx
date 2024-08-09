import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolumeServicesData } from "../../redux/slices/apiSlice";

import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VolumeServicesLevel = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.volumeServicesData);

  useEffect(() => {
    dispatch(fetchVolumeServicesData());
  }, [dispatch]);

  return (
    <div className="w-[30%] px-[5px] py-[10px]">
      <div className="block-cell">
        <div className="header-wrapper">
          <HeadTitle title="Volume vs Services Level" />
        </div>

        <div className="stacked-bar-chart w-full h-[280px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={state}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 0"
                horizontal={false}
                vertical={false}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Legend />
              <Bar
                dataKey="volume"
                stackId="a"
                fill="#0095ff"
                barSize={18}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="services"
                stackId="a"
                fill="#00e096"
                barSize={18}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VolumeServicesLevel;
