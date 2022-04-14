import { useEffect, useState } from "react";
import JSON_API from "./Constant";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const Chefs = () => {
  const url = `${JSON_API}/chefs`;
  const [chefs, setChefs] = useState([]);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState(false);
  const [salary, setSalary] = useState("");
  const [indexEdit, setIndexEdit] = useState(null);
  async function getChefs(url) {
    const responsive = await fetch(url)
      .then((res) => res.json())
      .then((data) => setChefs(data));
    return responsive;
  }
  useEffect(() => {
    getChefs(url);
  }, []);
  function reset(){
    setName('')
    setAge('')
    setAddress('')
    setGender('')
    setPhone('')
    setRole('')
    setSalary('')
}
  async function postData(url = "", data = {}) {
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
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            setAdd(true);
            reset()
          }}
          className="py-2 px-4 rounded-md bg-black text-white mr-5 my-5 duration-300 hover:bg-gray-600"
        >
          <AiOutlinePlus className="text-2xl" />
        </button>
      </div>
      <div
        className={
          add ? "container mx-auto w-1/3 flex flex-col mb-4" : "hidden"
        }
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <div className="flex justify-start items-center mb-5">
            <div className="flex items-center mr-10">
              <input
                type="radio"
                className="py-2 mr-3 px-2"
                value="male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                />
                <label>Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                className="py-2 mr-3 px-2"
                value="female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="block">
          <button
            className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
            onClick={() => {
              postData(url, {
                name: name,
                age: Number(age),
                sex: gender,
                address: address,
                role: role,
                phone: phone,
                salary: Number(salary),
              });
              alert("Add success");
              getChefs(url);
              setAdd(false);
            }}
          >
            Add
          </button>
          <button
            className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300"
            onClick={() => {
              setAdd(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        className={
          edit ? "container mx-auto w-1/3 flex flex-col mb-4" : "hidden"
        }
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <div className="flex justify-start items-center mb-5">
            <div className="flex items-center mr-10">
              <input
                type="radio"
                className="py-2 mr-3 px-2"
                value="male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                />
                <label>Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                className="py-2 mr-3 px-2"
                value="female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            className="w-full mb-3 border py-2 px-2"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="block">
          <button
            className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
            onClick={() => {
              fetch(url + "/" + indexEdit, {
                method: "PATCH",
                body: JSON.stringify({
                  name: name,
                  age: Number(age),
                  sex: gender,
                  address: address,
                  role: role,
                  phone: phone,
                  salary: Number(salary),
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then(() => getChefs(url));
              alert("Update success");
              setEdit(false);
            }}
          >
            Update
          </button>
          <button
            className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="container mx-auto p-5 border border-blue-500 shadow-md rounded mb-10 overflow-y-scroll">
        <div className="flex justify-between items-center border-b border-red-600 text-center font-bold uppercase py-5 mb-3">
          <div className="flex w-2/5 text-center justify-around">
            <div className="w-1/3">Chef Name</div>
            <div className="w-1/3">Age</div>
            <div className="w-1/3">Gender</div>
          </div>
          <div className="flex w-2/5 text-center justify-between">
            <div className="w-1/2">Address</div>
            <div className="w-1/2">Role</div>
          </div>
          <div className="flex w-2/5 text-center justify-between">
            <div className="w-1/2">Phone</div>
            <div className="w-1/2">Salary</div>
          </div>
          <div className="flex w-1/5 text-center justify-center">
            <span className="mr-2">Action</span>
          </div>
        </div>
        {chefs.map((chef) => (
          <div className="flex justify-between items-center py-5 border mb-5 border-red-600 rounded-md">
            <div className="flex w-2/5 text-center justify-around">
              <div className="w-1/3">{chef.name}</div>
              <div className="w-1/3">{chef.age}</div>
              <div className="w-1/3 capitalize">{chef.sex}</div>
            </div>
            <div className="flex w-2/5 text-center justify-between">
              <div className="w-1/2">{chef.address}</div>
              <div className="w-1/2 uppercase">{chef.role}</div>
            </div>
            <div className="flex w-2/5 text-center justify-between">
              <div className="w-1/2">{chef.phone}</div>
              <div className="w-1/2">
                {chef.salary.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="w-1/5 flex justify-center">
              <button
                className="p-3"
                onClick={() => {
                  setEdit(true);
                  setIndexEdit(chef.id);
                  setName(chef.name);
                  setAge(chef.age);
                  setGender(chef.sex);
                  setAddress(chef.address);
                  setPhone(chef.phone);
                  setRole(chef.role);
                  setSalary(chef.salary);
                }}
              >
                <FiEdit className="text-lg" />
              </button>
              <button
                className="p-3"
                onClick={() => {
                  console.log(chefs);
                  fetch(url + "/" + chef.id, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then(() => {
                      alert("Delete Success");
                      getChefs(url);
                    });
                }}
              >
                <AiFillDelete className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chefs;
