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
        <div className="flex justify-around w-full border" key={index}>
          <p className="w-1/3 text-center border-r py-2">{item.name}</p>
          <p className="w-1/3 text-center border-r py-2">{item.email}</p>
          <div className="flex w-1/3 justify-center">
            <button className="p-2 mr-3 bg-black text-white text-center rounded-full shadow-lg hover:bg-red-600 duration-300">edit</button>
            <button
              className="p-2 bg-black text-white text-center rounded-full shadow-lg hover:bg-red-600 duration-300"
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
              remove
            </button>
          </div>
        </div>
      ))}
      <div className="block mt-3">
        <Link to="./addUser">
          <button className="float-right p-2 bg-black text-white rounded-md shadow-lg hover:bg-red-600 duration-300">Add User</button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
