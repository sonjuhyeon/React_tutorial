import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { fetchVisitorsData } from "../../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Visitors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.visitorsData);

  useEffect(() => {
    dispatch(fetchVisitorsData());
  }, [dispatch]);

  return (
    <div className="w-[40%] py-[10px] px-[5px]">
      <div className="block-cell">
        <div className="header-wrapper">
          <HeadTitle title="Visitor's Insights" />
        </div>
        <div className="line-chart w-full h-[280px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={state}
              margin={{
                top: 10,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 0"
                horizontal={true}
                vertical={false}
                stroke="#333"
              />
              <XAxis dataKey="month" />
              <YAxis ticks={[100, 200, 300, 400]} />
              <Tooltip />
              <Legend />
              <Line
                type="basis"
                dataKey="loyal_customer"
                stroke="#3cd856"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="basis"
                dataKey="new_customer"
                stroke="#f64e60"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="basis"
                dataKey="unique_customer"
                stroke="#a700ff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
