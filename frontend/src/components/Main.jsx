import React, { useState } from "react";
import "../styles/Main.scss";
import next from "../assets/next.svg";
import increase from "../assets/increase.svg";
import chart from "../assets/chart.svg";
import closed from "../assets/closed.svg";
import options from "../assets/options.svg";
import plus from "../assets/plus.svg";
import Chart from "./Chart";

function Main() {
  const option = [
    {
      value: "yearlevel",
      label: "Yearly",
    },
    {
      value: "monthlevel",
      label: "Monthly",
    },
    {
      value: "daylevel",
      label: "Daily",
    },
  ];
  const [endpoint, setEndpoint] = useState("yearlevel");
  return (
    <div className="main">
      <div className="main__revenues card">
        <h2 className="title">Revenues</h2>
        <h1 className="amount">
          15%
          <img src={increase} alt="increase" />
        </h1>
        <p className="description">Increase compared to last week</p>
        <p className="link">
          Revenues report
          <img src={next} alt="next" />
        </p>
      </div>

      <div className="main__deals card">
        <h2 className="title">Lost deals</h2>
        <h1 className="amount">4%</h1>
        <p className="description">You closed 96 out of 100 deals</p>
        <p className="link">
          All deals
          <img src={next} alt="next" />
        </p>
      </div>

      <div className="main__goals card">
        <h2 className="title">Quarter Goals</h2>
        <div className="chart">
          <img src={chart} alt="chart" />
        </div>
        <p className="link">
          All goals
          <img src={next} alt="next" />
        </p>
      </div>

      <div className="card customers">
        <div className="header">
          <h1 className="title">Customers</h1>
          <div className="filter">
            Sort by Newest
            <img src={closed} alt="closed" />
          </div>
        </div>
        <div className="chats">
          <div className="chat">
            <div className="avatar">
              <img src="https://i.pravatar.cc/32" alt="avatar" />
            </div>
            <div className="text">
              <h2 className="name">Chris Friedkly</h2>
              <p className="message">Supermarket Villanova</p>
            </div>
          </div>
          <div className="chat options">
            <div className="left">
              <div className="avatar">
                <img src="https://i.pravatar.cc/32" alt="avatar" />
              </div>
              <div className="text">
                <h2 className="name">Maggie Johnson</h2>
                <p className="message">Oasis Organic Inc.</p>
              </div>
            </div>
            <img src={options} alt="options" />
          </div>
          <div className="chat">
            <div className="avatar">
              <img src="https://i.pravatar.cc/32" alt="avatar" />
            </div>
            <div className="text">
              <h2 className="name">Gael Harry</h2>
              <p className="message">New York Finest Fruits</p>
            </div>
          </div>
          <div className="chat">
            <div className="avatar">
              <img src="https://i.pravatar.cc/32" alt="avatar" />
            </div>
            <div className="text">
              <h2 className="name">Jenna Sullivan</h2>
              <p className="message">Walmart</p>
            </div>
          </div>
        </div>
        <p className="link">
          All customers
          <img src={next} alt="next" />
        </p>
      </div>

      <div className="graph-container">
        <div className="graph card">
          <div className="header">
            <h1 className="title">Growth</h1>
            <div className="filter">
              <select
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
              >
                {option.map((op, index) => (
                  <option key={index} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="content">
            <Chart endpoint={endpoint} />
          </div>
        </div>
        <div className="small-cards">
          <div className="small-card first">
            <div className="card_title">Top month</div>
            <div className="date">November</div>
            <div className="description">
              2019
            </div>
          </div>
          <div className="small-card second">
            <div className="card_title">Top year</div>
            <div className="year">
              2023
            </div>
            <div className="description">
            96K sold so far
            </div>
          </div>
          <div className="small-card third">
            <div className="card_title">Top buyer</div>
            <img src="https://i.pravatar.cc/32" alt="avatar" />
            <div className="name">
              Maggie Johnson
            </div>
            <div className="company">
            Oasis Organic Inc.
            </div>
          </div>
        </div>
      </div>

      <div className="card messages">
        <h1 className="title">
          Chats
        </h1>
        <div className="description">
          2 Unread messages
        </div>
        <div className="avatars">
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="avatar" />
          </div>
        </div>
      </div>

      <div className="card states">
        <h1 className="title">
          Top States
        </h1>
        <div className="bars">
          <div className="bar">
            <p>NY</p>
            <p>120K</p>
          </div>
          <div className="bar">
            <p>MA</p>
            <p>
              80K
            </p>
          </div>
          <div className="bar">
            <p>NH</p>
            <p>70K</p>
          </div>
          <div className="bar">
            <p>OR</p>
            <p>50K</p>
          </div>
        </div>
      </div>

      <div className="card bottom_deals">
        <h1 className="title">
          New Deals
        </h1>
        <div className="tags">
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Fruit2Go</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Marshall's MKT</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>CCNT</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Joana Mini-market</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Fruit2Go</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Little Brazil Vegan</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Target</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Organic Place</p>
          </div>
          <div className="tag">
            <img src={plus} alt="plus" />
            <p>Morello's</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
