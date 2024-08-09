import React, { useEffect } from "react";
import { fetchRevenueData } from "../../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import HeadTitle from "./HeadTitle";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const formatYLabel = (value) => `${value}K`;
const formatTolltipValue = (value) => `${value} Sales`;

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.revenueData);

  useEffect(() => {
    dispatch(fetchRevenueData());
  }, [dispatch]);

  return (
    <div className="block-cell">
      <div className="header-wrapper">
        <HeadTitle title="Total Revenue" />
      </div>
      <div className="bar-chart w-full h-[280px] mt-6">
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
              horizontal={true}
              vertical={false}
            />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={formatYLabel} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={formatTolltipValue}
            />
            <Legend />
            <Bar
              dataKey="online"
              fill="#0095ff"
              // activeBar={<Rectangle fill="pink" stroke="blue" />}
              barSize={18}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="offline"
              fill="#00e096"
              // activeBar={<Rectangle fill="gold" stroke="purple" />}
              barSize={18}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
