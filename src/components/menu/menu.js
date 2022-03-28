import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JSON_API from "../admin/Constant";

const Menu = () => {
  const url = `${JSON_API}/Menus`;
  const [menus, setMenus] = useState([])
  async function getMenus(url){
    await fetch(url)
    .then(res => res.json())
    .then(data => setMenus(data))
  }
  useEffect(() => {
    getMenus(url)
  }, [])
  return (
    <div>
      <div className="block relative overflow-hidden bg-black min-h-30vh">
        <div className="absolute bg-black w-full h-full bg-center"></div>
        <div className="container mx-auto relative p-3 text-center text-white flex flex-col justify-center min-h-30vh">
          <h1 className="text-6xl tracking-4">MENU</h1>
          <p className="pt-2">
            The classic dishes are presented by unique signature in new mixture.
          </p>
        </div>
      </div>
      <div className="max-w-1140p mx-auto">
        <div className="text-center pt-12 px-5 -mb-20">
          <h1 className="uppercase text-5xl laptop:tracking-5">our menu</h1>
        </div>
        <div>
          {menus.map((menu, index) => (
              <div className="pt-24" key={index}>
              <h2 className="text-3xl text-center laptop:text-left uppercase border-b border-red-600">
                {menu.name}
              </h2>
              {menu.menus.map((item, index) => (
                <div className="flex p-1 text-gray-500 text-lg border-b border-gray-300 laptop:justify-between justify-evenly" key={index}>
                  <p className="pl-6 w-1/2">{item.name}</p>
                  <p>{item.weight}</p>
                  <p>$ {item.price}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="py-14 px-5 bg-black mt-24">
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
            <h3 className="text-8xl mb-1 leading-snug">-35% off</h3>
            <div className="h-0.5 w-1/5 bg-red-600 mb-4 flex justify-center"></div>
            <h3 className="uppercase text-lg tracking-4">friday to sunday</h3>
          </div>
          <div className="laptop:absolute -bottom-8 w-full flex justify-center">
            <Link to="/contact">
              <button className="py-5 px-16 text-white bg-red-600 text-lg hover:bg-red-700 duration-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
