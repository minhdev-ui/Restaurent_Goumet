import React, { useState } from "react";
import JSON_API from "../admin/Constant";

export default function Booking() {
  const url = `${JSON_API}/books`;
  const [showBooking, setShowBooking] = useState(false);
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const reset = () => {
    setPeople(0)
    setDate(null)
    setTime(null)
    setName(null)
  }
  async function postBooking(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }
  return (
    <>
      <div
        className={
          showBooking
            ? "fixed top-0 left-0 w-1/5 p-2 bg-black shadow-2xl rounded-b-lg booking duration-300"
            : "hidden"
        }
      >
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded-md"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">People</label>
          <input
            type="number"
            className="w-full p-2 rounded-md"
            min="0"
            value={people}
            onChange={(e) => {
              setPeople(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Date</label>
          <input
            type="date"
            className="w-full p-2 rounded-md"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Time</label>
          <input
            type="time"
            className="w-full p-2 rounded-md"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div className="block">
          <button
            className="w-full p-2 bg-white rounded-sm"
            onClick={() => {
              postBooking(url, {
                name: name,
                people: people,
                date: date,
                time: time,
                accept: false,
              });
              setShowBooking(!showBooking);
              reset();
              alert("Booking Succeed");
            }}
          >
            Booking Now
          </button>
        </div>
      </div>
      <div className="fixed z-10 right-4 bottom-4 rounded-sm shadow-lg bg-white">
        <button
          className="py-2 px-4 bg-black text-white border border-red-700 hover:bg-hoverBtn duration-300"
          onClick={() => {
            setShowBooking(!showBooking);
          }}
        >
          Book A Table
        </button>
      </div>
    </>
  );
}
