import "../App.css";
import React from "react";
import { useState } from "react";
import { MdPerson, MdCurrencyBitcoin } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const TipCalculator = () => {
  const [width, setWidth] = useState(50);
  const [person, setPerson] = useState(0);
  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeWidth = (event) => {
    setWidth(event.target.value);
  };

  const changePerson = (event) => {
    setPerson(event.target.value);
  };

  const handleBill = (event) => {
    setBill(event.target.value);
  };

  const reset = () => {
    setWidth(50);
    setTipAmount(0);
    setTotal(0);
    setPerson(0);
  };

  return (
    <div className="App">
      <div className="container">
        <section className="main">
          <div>
            <h1 className="title">TIP CALCULATOR</h1>
          </div>
          <div>
            <div className="calculator">
              <div className="sect">
                <h4 className="text">Total Person</h4>
                <div className="icon">
                  <MdPerson color={"black"} size={50} />
                  <h4 className="text">{person}</h4>
                </div>
                <input
                  className="input"
                  type="number"
                  min={0}
                  max={50}
                  step={5}
                  onChange={changePerson}
                  value={person}
                />
              </div>
              <div className="sect">
                <h4 className="text">Bill($)</h4>
                <input
                  className="input"
                  type="number"
                  placeholder="$"
                  onChange={handleBill}
                  value={bill}
                />
              </div>

              <div className="sect">
                <h4 className="text">Tip %{width}</h4>
                <input
                  className="input"
                  type="range"
                  min={0}
                  max={50}
                  step={5}
                  placeholder="$"
                  onChange={changeWidth}
                  value={width}
                />
                <input
                  type="number"
                  placeholder="Custom"
                  className="custom"
                  onChange={changeWidth}
                  value={width}
                />
              </div>
              <div className="sect">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 className="text">Tip Amount /person</h4>
                  <div className="icon">
                    <FaDollarSign color={"black"} size={50} />
                    <h2 className="text">{tipAmount}</h2>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 className="text">Total /person</h4>
                  <div className="icon">
                    <FaDollarSign color={"black"} size={50} />
                    <h2 className="text">{total}</h2>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: 20,
                  alignSelf: "center",
                }}
              >
                <button
                  style={{
                    width: 150,
                    height: 50,
                    fontSize: 30,
                    backgroundColor: "white",
                    borderRadius: 20,
                    cursor: "pointer",
                  }}
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TipCalculator;
