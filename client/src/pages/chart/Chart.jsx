import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "./chart.css"

const BarChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        var food=0, health=0, music=0, technology=0, sports = 0, others = 0;
         axios
          .get("/posts")
          .then(res => {
              console.log(res);
              res.data.forEach(dataObj => {
                  console.log(dataObj.category)
              switch(dataObj.category){
                  case "Food" : food++;
                                break;
                  case "Health" : health++;
                                break;
                  case "Music" : music++;
                                break;
                  case "Technology" : technology++;
                                        break;
                  case "Sports" : sports++;
                                break;
                  case "Others" : others++;
                                break;                                                                           
              }
            })
            setChartData({
              labels: ["Food", "Health", "Music", "Technolgy", "Sports", "Others"],
              datasets: [
                {
                  label: "Category-wise number of blogs",
                  data: [food, health, music, technology, sports, others],
                  backgroundColor: ["red", "green", "yellow", "blue", "cyan", "pink"],
                  borderWidth: 4
                }
              ]
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        chart();
      }, []);
      return (
          <div className="main-div">
            <Bar
              data={chartData}
              options={{
                maintainAspectRatio : false,
                responsive: true,
                title: { text: "CATEGORY-WISE NO. OF BLOGS", display: true },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        stepSize: 1,
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
      );
    };
    
export default BarChart;
