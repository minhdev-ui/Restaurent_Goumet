import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JSON_API from "./Constant";

const Users = () => {
  const url = `${JSON_API}/users`;
  const [data, setData] = useState([]);
  async function getUser(url) {
    const responsive = await fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    return responsive;
  }
  useEffect(() => {
    getUser(url);
    console.log('ComponentDidMount');
  }, []);
  return (
    <div className="container mx-auto py-6">
      {data.map((item, index) => (
        <div className="flex justify-around w-full border py-3" key={index}>
          <p className="w-1/3 text-center border-r py-2">{item.name}</p>
          <p className="w-1/3 text-center border-r py-2">{item.email}</p>
          <div className="flex w-1/3 justify-center">
            <button className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"><i class="fa-solid fa-pen-to-square"></i></button>
            <button
              className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300"
              onClick={() => {
                fetch(url + "/" + item.id, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then(() => {
                    alert('Xóa Thành Công')
                    getUser(url)
                })
                }
            }
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="block mt-3">
        <Link to="./addUser">
          <button className="py-1 px-3 float-right p-2 bg-black text-white rounded-md shadow-lg hover:bg-red-600 duration-300"><i class="fa-solid fa-plus"></i></button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
