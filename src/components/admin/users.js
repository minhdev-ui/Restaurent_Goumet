import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JSON_API from "./Constant";

const Users = () => {
  const url = `${JSON_API}/users`
  const [data, setData] = useState([])
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [indexEdit, setIndexEdit] = useState(null)
  function getUser(url) {
    const responsive = fetch(url)
      .then((res) => res.json())
      .then((data) => setData((prevState) => [...data]))
    return responsive
  }
  useEffect(() => {
    getUser(url)
    console.log(data);
  }, [])
  return (
    <div className="container mx-auto py-6">
      <div className={edit ? "container mx-auto w-1/3 flex flex-col mb-4" : "hidden"}>
        <div>
          <label>Name</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input type='email' className="w-full mb-3 border py-2 px-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="block">
          <button className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
            onClick={() => {
              fetch(url + '/' + indexEdit, {
                method: "PATCH",
                body: JSON.stringify({
                  name: name,
                  email: email
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .then(() => getUser(url))
              alert("Update success")
              setEdit(false)
            }}
          >
            Update
          </button>
          <button className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300" onClick={() => {setEdit(false)}}>Cancel</button>
        </div>
      </div>
      <div className="flex text-center justify-between border py-3">
        <h2 className="w-2/5 text-lg font-semibold border-r">Name</h2>
        <h2 className="w-2/5 text-lg font-semibold border-r">Email</h2>
        <div className="w-1/5"></div>
      </div>
      {data.map((item, index) => (
        <div className="flex justify-around w-full border py-3" key={index}>
          <p className="w-2/5 text-center border-r py-2">{item.name}</p>
          <p className="w-2/5 text-center border-r py-2">{item.email}</p>
          <div className="flex w-1/5 justify-center">
            <button className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
              onClick={() => {
                setEdit(true)
                setIndexEdit(item.id)
                fetch(url + '/' + item.id, {
                  method: "GET"
                })
                .then(res => res.json())
                .then(data => {
                  setName(data.name)
                  setEmail(data.email)
                })
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300"
              onClick={() => {
                fetch(url + "/" + item.id, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then(() => {
                    alert('Delete Success')
                    getUser(url)
                })
                .catch(err => console.log(err))
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
