import { Link } from "react-router-dom";
import "./home.scss";
import restaurantInterior from "../../images/restaurant-interior.jpg";
import menuFood from "./menuFood";
import Carousel from "./carousel";
import { useState } from "react";
import JSON_API from '../admin/Constant'
const Home = () => {
  const url = `${JSON_API}/books`
  const [showBooking, setShowBooking] = useState(false)
  const [people, setPeople] = useState(0)
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [name, setName] = useState('')
  async function postBooking(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  return (
    <div className="block">
      <div className={showBooking ? "fixed top-0 left-0 w-1/5 p-2 bg-black shadow-2xl rounded-b-lg booking duration-300" : "hidden"}>
      <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Name</label>
          <input type='text' className="w-full p-2 rounded-md" value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">People</label>
          <input type='number' className="w-full p-2 rounded-md" min='0' value={people}
            onChange={(e) => {
              setPeople(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Date</label>
          <input type='date' className="w-full p-2 rounded-md" onChange={(e) => {
            setDate(e.target.value)
          }}/>
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-400 mr-3">Time</label>
          <input type='time' className="w-full p-2 rounded-md"
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />
        </div>
        <div className="block">
          <button className="w-full p-2 bg-white rounded-sm"
          onClick={() => {
            postBooking(url, {
              name: name,
              people: people,
              date: date,
              time: time
            })
            setShowBooking(!showBooking)
            alert("Booking Succeed")
          }}>Booking Now</button>
        </div>
      </div>
      <div className="fixed z-10 right-4 bottom-4 rounded-sm shadow-lg bg-white">
        <button className="py-2 px-4"
          onClick={() => {
            setShowBooking(!showBooking)
          }}
        >
          Book A Table
        </button>
      </div>
      <div className="banner bg-black text-white py-14">
        <div className="bannerInner flex items-center flex-col laptop:w-3/5 w-full p-10 mx-auto">
          <div className="bannerInner_icon">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="bannerInner_Title text-center uppercase">
            <h1 className="laptop:text-6xl text-4xl m-0 tracking-5">gourmet restaurant</h1>
          </div>
          <p className="bannerInner_desc flex justify-center">
            <span className="laptop:text-xl text-sm py-2">The Secret to better life is eating delicious foods.</span>
          </p>
          <div className="bannerInner_btn p-4">
            <Link to="/menu">
              <button className="btn"><span className = 'z-10 relative hoverBtn'>Click here</span></button>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu flex flex-col items-center container mx-auto">
        <div className="menu_title pt-12 pb-8 py-3">
          <h1>OUR MENU</h1>
        </div>
        <div className="menuFoods flex flex-wrap items-center flex-col mx-auto justify-between laptop:flex-row sm:w-full">
          {menuFood.map((food) => (
            <div key={food.id} className="menuFood laptop:w-1/3">
              <img src={food.img} />
              <h3>{food.name}</h3>
              <p>{food.desc}</p>
            </div>
          ))}
        </div>
        <div className="menuBtn">
          <Link to="/menu" className="btnAnimation">
            <button className="btn"><span className = 'z-10 relative hoverBtn'>See all Menu</span></button>
          </Link>
        </div>
      </div>
      <div className="contact">
        <div className="contactInner laptop:max-w-full flex flex-col items-center mx-auto laptop:flex-row laptop:justify-center">
          <div className="contact_Img laptop:w-1/2">
            <img src={restaurantInterior} className="float-left"/>
          </div>
          <div className="contactInfo laptop:w-1/3 w-full">
            <h2>Your table is waiting for you</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="contactBtn">
              <Link to="/contact">
                <button className="btn btnAnimation">
                  <span className = 'z-10 relative hoverBtn'><i class="fa-solid fa-phone"></i>Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-14 flex flex-col items-center justify-between">
        <div className="mb-8">
          <h1 className="text-4xl uppercase tracking-5 font-medium">
            testimonials
          </h1>
        </div>
        <div className="flex flex-col items-center justify-evenly laptop:flex-row container">
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                  src={require('../../images/johnDoe.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                 src={require('../../images/maria.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <div className="laptop:w-30% flex flex-col items-center mb-5 justify-between p-5 bg-gray-f7">
            <div className="pt-5 px-3 mb-5">
              <p className="mb-5 text-center leading-6 text-text-italic font-light italic">
                "Tellus rutrum pellentesque eu tincidunt. Sapien eget mi proin
                sed libero enim. Suspendisse potenti nullam ac tortor vitae
                purus faucibus. Quis ipsum suspendisse ultrices gravida. Commodo
                ullamcorper a lacus vestibulum."
              </p>
              <div className="text-center">
                <img
                  src={require('../../images/kelvin.jpg')}
                  className="w-16 h-16 bg-center rounded-full mx-auto mb-5"
                />
                <h3>John Doe</h3>
                <p>WORKER</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 px-5 bg-black">
        <div className="laptop:w-2/4 container mx-auto relative">
          <div className="flex flex-col items-center text-white pt-10 pb-16 border-2">
            <div className="pb-3 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h1 className="uppercase text-3xl mb-1">happy day promo</h1>
            <h3 className="laptop:text-8xl text-5xl mb-1 leading-snug">-35% off</h3>
            <div className="h-0.5 w-1/5 bg-red-600 mb-4 flex justify-center"></div>
            <h3 className="uppercase text-lg tracking-4">friday to sunday</h3>
          </div>
          <div className="laptop:absolute -bottom-8 w-full flex justify-center">
            <Link to="/contact">
              <button className="py-5 px-16 text-white bg-red-600 text-lg hover:bg-red-700 duration-200">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Carousel/>
      </div>
    </div>
  );
};

export default Home;
