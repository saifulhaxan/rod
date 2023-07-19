import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import StatCard from "../../Components/StatsCard/index.js";
import { stats } from "../../Config/Data";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";

import "./style.css";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'Rod Fin | Dashboard';

    setStatistics(stats)
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  {statistics.map((stats) => (
                    <div className="col-xl-4 col-md-6 stats" key={stats.id}>
                      <StatCard item={stats} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="d-flex flex-wrap justify-content-between">
                <h3 className="mainTitle">User and Watcher</h3>
                <SelectBox selectClass="mainInput" name="Monthly" required option={'optionData'}
                  
                />
                </div>
                <div className="graph-wrapper">
                  <CChart
                    type="line"
                    height="90"
                    options={{
                      scales: {
                        y: {
                          suggestedMin: 0,
                          suggestedMax: 40,
                        },
                      },
                    }}
                    data={{
                      labels: ["Nov 2010", "March 2011", "July 2012", "Augest 2013", "Augest 2014"],
                      tension: "0.5",
                      datasets: [
                        {
                          label: "My First dataset",

                          backgroundColor: "rgba(0, 41, 58, 29%)",
                          borderColor: "#000000",
                          pointBackgroundColor: "#000000",
                          pointBorderColor: "#000000",
                          borderWidth: 1,
                          data: [35, 30, 35, 30, 35],
                          tension: 0.5,
                        },
                        {
                          label: "My Second dataset",
                          backgroundColor: "rgba(247, 21, 0, 29%)",
                          borderColor: "#F71500",
                          pointBackgroundColor: "#F71500",
                          borderWidth: 1,
                          pointBorderColor: "#F71500",
                          data: [30, 35, 30, 35, 30],
                          tension: 0.5,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
