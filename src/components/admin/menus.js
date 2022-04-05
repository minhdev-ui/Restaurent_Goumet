import {useEffect, useState} from "react";
import JSON_API from "./Constant";
const Menus = () => {
    const url = `${JSON_API}/Menus`;
    const [menu, setMenu] = useState([])
    const [edit, setEdit] = useState(false)
    const [indexEdit, setIndexEdit] = useState(null)
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
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
            <div className={edit ? "container mx-auto w-1/3 flex flex-col mb-4" : "hidden"}>
        <div>
          <label>Name</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Weight</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Price</label>
          <input type='number' className="w-full mb-3 border py-2 px-2" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
          <label>Category</label>
          <input type='text' className="w-full mb-3 border py-2 px-2" value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div className="block">
          <button className="py-1 px-3 mr-3 text-white text-center rounded-md hover:shadow-lg bg-yellow-300 duration-300"
            onClick={() => {
              fetch(url + '/' + indexEdit, {
                method: "PATCH",
                body: JSON.stringify({
                  name: name,
                  weight: weight,
                  price: price,
                  category: category
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .then(() => getMenu(url))
              alert("Update success")
              setEdit(false)
            }}
          >
            Update
          </button>
          <button className="py-1 px-3 text-white text-center rounded-md hover:shadow-lg bg-red-700 duration-300" onClick={() => {setEdit(false)}}>Cancel</button>
        </div>
      </div>
            {menu.map(function(item){
                return(
                    <div className="border border-red-700 mb-5 p-5">
                        <div>
                            <div className="flex justify-between py-2">
                                <p className="w-3/6">
                                    {item.name}
                                </p>
                                <div className="w-2/6 flex justify-evenly">
                                    <p>
                                        {item.weight}
                                    </p>
                                    <p>
                                        {item.price} $
                                    </p>
                                    <p className="uppercase">
                                        {item.category}
                                    </p>
                                </div>
                                <div className="w-1/6 text-lg flex justify-center">
                                    <button className="mr-2"
                                        onClick={() => {
                                            setEdit(!edit)
                                            setIndexEdit(item.id)
                                            setName(item.name)
                                            setWeight(item.weight)
                                            setPrice(item.price)
                                            setCategory(item.category)
                                        }}
                                    >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="ml-2"
                                        onClick={() => {
                                            fetch(url + '/' + item.id, {
                                                method: "DELETE"
                                            })
                                            .then(res => res.json())
                                            .then(() => {
                                                alert("Delete Success")
                                                getMenu(url)
                                            })
                                        }}
                                    >
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
        </div>
    )
}

export default Menus