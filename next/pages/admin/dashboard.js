import React from "react";

// components

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import { VictoryChart, VictoryLine } from "victory";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                  Performance
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  Total orders
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
              <VictoryChart>
                <VictoryLine
                  samples={25}
                  y={(d) => Math.sin(5 * Math.PI * d.x)}
                />
                <VictoryLine
                  samples={100}
                  style={{ data: { stroke: "red" } }}
                  y={(d) => Math.cos(5 * Math.PI * d.x)}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
