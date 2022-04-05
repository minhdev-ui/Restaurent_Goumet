// import { Menu } from "@headlessui/react";
import {useEffect, useState} from "react";
import JSON_API from "./Constant";
const Menus = () => {
    const url = `${JSON_API}/Menus`;
    const [menu, setMenu] = useState([])
    async function getMenu(url) {
        const responsive = await fetch(url)
          .then((res) => res.json())
          .then((data) => setMenu(data))
        return responsive;
      }
    useEffect(function(){
        getMenu(url)
    },[])
    return (
        <div className="container px-5 py-12 mx-auto">
            {menu.map(function(item){
                return(
                    <div className="border border-red-700 mb-5 p-5">
                        <div>
                            {item.menus.map(function(menu){
                                return (
                                  <div className="flex justify-between py-2">
                                      <p>
                                          {item.name}
                                      </p>
                                      <div className="w-1/2 flex justify-around">
                                      <p>
                                          {item.weight}
                                      </p>
                                      <p>
                                          {item.price}
                                      </p>
                                      <p>
                                          {item.category}
                                      </p>
                                      </div>
                                  </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menus