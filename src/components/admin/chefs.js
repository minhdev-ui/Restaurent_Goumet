import { useEffect, useState } from "react";
import JSON_API from "./Constant";
import {AiOutlinePlus} from "react-icons/ai"
const Chefs = () => {
    const url = `${JSON_API}/chefs`
    const [chefs,setChefs]=useState([])
    const [add,setAdd]=useState(false)
    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [gender, setGender]=useState("")
    const [address, setAddress]=useState("")
    const [role,setRole]=useState("")
    const [phone ,setPhone]=useState("")
    const [salary, setSalary]=useState("")
    async function getChefs(url) {
        const responsive = await fetch(url)
          .then((res) => res.json())
          .then((data) => setChefs(data))
        return responsive;
      }
      useEffect(()=>{
          getChefs(url)
      }, [])
      async function postData(url = '', data = {}) {
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
        <>
            <div className="flex w-full justify-end">
                <button onClick = {()=>{
                    setAdd(true)
                }} className="py-2 px-4 rounded-md bg-black text-white mr-5 my-5 duration-300 hover:bg-gray-600">
                    <AiOutlinePlus className="text-2xl"/>
                </button>
            </div>
            <div className={add ? "container mx-auto w-1/3 flex flex-col mb-4" : "hidden"}>
        <div>
          <label>Name</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Age</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={gender} onChange={(e) => setGender(e.target.value)}/>
        </div>
        <div>
          <label>Address</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
          <label>Role</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={role} onChange={(e) => setRole(e.target.value)}/>
        </div>
        <div>
          <label>Phone</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div>
          <label>Salary</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={salary} onChange={(e) => setSalary(e.target.value)}/>
        </div>
        <div className="block">
          <button className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
            onClick={() => {
              postData(url, {
                name: name,
                age: Number (age),
                sex: gender,
                address: address,
                role: role,
                phone: phone,
                salary: Number(salary)
              })
              alert("Add success")
              getChefs(url)
              setAdd(false)
            }}
          >
            Add
          </button>
          <button className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300" onClick={() => {setAdd(false)}}>Cancel</button>
        </div>
      </div>
            <div className="container mx-auto p-5 border border-blue-500 shadow-md rounded">
            <div className="flex justify-between items-center border-b border-red-600 text-center font-bold uppercase py-5 mb-3">
                        <div className="flex w-1/2 ">
                        <div className="mr-44">Chef Name</div>
                        <div className="mr-36">Age</div>
                        <div>Gender</div>
                        </div>
                        <div className="flex w-1/4 ">
                        <div className="mr-28">Address</div>
                        <div>Role</div>
                        </div>
                        <div className="flex w-1/4 ">
                        <div className="mr-32">Phone</div>
                        <div>Salary</div>
                        </div>
                    </div>
                {chefs.map((chef)=>(
                    <div className="flex justify-between items-center py-5 border border-red-600 rounded-md">
                        <div className="flex w-1/2 ">
                        <div className="mr-40">{chef.name}</div>
                        <div className="mr-40">{chef.age}</div>
                        <div className="capitalize">{chef.sex}</div>
                        </div>
                        <div className="flex w-1/4 ">
                        <div className="mr-28">{chef.address}</div>
                        <div className="uppercase">{chef.role}</div>
                        </div>
                        <div className="flex w-1/4 ">
                        <div className="mr-24">{chef.phone}</div>
                        <div>{chef.salary.toLocaleString("en-US", {style: 'currency',currency: 'USD'})}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chefs