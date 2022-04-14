import React, { useEffect, useState } from 'react'
import {BiDollar} from 'react-icons/bi'
import Chart from 'react-apexcharts'
import {RiCupLine, RiFileListLine} from 'react-icons/ri'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import { chefsUrl, menusUrl, ordersUrl, totalUrl, usersUrl } from './Constant'
import CountUp from 'react-countup'
export default function Total() {
    const url = totalUrl
    const menuUrl = menusUrl
    const orderUrl = ordersUrl
    const userUrl = usersUrl
    const chefUrl = chefsUrl
    const [total, setTotal] = useState([])
    const [menus, setMenus] = useState([])
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])
    const [chefs, setChefs] = useState([])
    async function getTotal(url) {
        const response = await fetch(url)
        .then(res => res.json())
        .then(data => setTotal(data))
        return response
    }
    async function getMenus(url) {
        const response = await fetch(url)
        .then(res => res.json())
        .then(data => setMenus(data))
        return response
    }
    async function getOrders(url) {
        const response = await fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
        return response
    }
    async function getUsers(url) {
        const response = await fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
        return response
    }
    async function getChefs(url) {
        const response = await fetch(url)
        .then(res => res.json())
        .then(data => setChefs(data))
        return response
    }
    useEffect(() => {
        getTotal(url)
        getMenus(menuUrl)
        getOrders(orderUrl)
        getUsers(userUrl)
        getChefs(chefUrl)
    }, [])
    console.log(total);
    
    const date = new Date()
    const chartOption = {
        series: [{
            name: "Total",
            data: total.map(item => item.total)
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enable: false
                }
            },
            dataLabels: {
                enable: false
            },
            stoke: {
                curve: 'straight'
            },
            title: {
                text: `Restaurant's Total Revenue by Month in ${date.getFullYear()}`,
                align: 'center'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: total.map(item => item.month)
            }
        }
    }
  return (
    <div className='font-sans'>
        <div className='flex justify-around pt-5 pb-10'>
            <div className='p-6 flex rounded-md shadow-md justify-between items-center'>
                <span className='px-4 py-4 mr-4 rounded-full bg-blue-400 opacity-70'>
                    <RiCupLine className='text-5xl text-blue-800 leading-loose'/>
                </span>
                <div>
                    <h3 className='text-4xl'>
                        <CountUp end={menus.length} duration={menus.length/5}/>
                    </h3>
                    <p className='uppercase'>total menus</p>
                </div>
            </div>
            <div className='p-6 flex rounded-md shadow-md justify-between items-center'>
                <span className='px-4 py-4 mr-4 rounded-full bg-blue-400 opacity-70'>
                    <BiDollar className='text-5xl text-blue-800 leading-loose'/>
                </span>
                <div>
                    <h3 className='text-4xl'>
                        <CountUp end={parseFloat((total.map(item => item.total).reduce((acc, cur) => acc + cur, 0))/1000)} duration={3}/>K
                    </h3>
                    <p className='uppercase'>total Revenue</p>
                </div>
            </div>
            <div className='p-6 flex rounded-md shadow-md justify-between items-center'>
                <span className='px-4 py-4 mr-4 rounded-full bg-blue-400 opacity-70'>
                    <RiFileListLine className='text-5xl text-blue-800 leading-loose'/>
                </span>
                <div>
                    <h3 className='text-4xl'>
                        <CountUp end={orders.length} duration={orders.length/5}/>
                    </h3>
                    <p className='uppercase'>total orders</p>
                </div>
            </div>
            <div className='p-6 flex rounded-md shadow-md justify-between items-center'>
                <span className='px-4 py-4 mr-4 rounded-full bg-blue-400 opacity-70'>
                    <AiOutlineUsergroupDelete className='text-5xl text-blue-700'/>
                </span>
                <div>
                    <h3 className='text-4xl'>
                        <CountUp end={users.length} duration={users.length/5}/>
                    </h3>
                    <p className='uppercase'>total users</p>
                </div>
            </div>
            <div className='p-6 flex rounded-md shadow-md justify-between items-center'>
                <span className='px-4 py-4 mr-4 rounded-full bg-blue-400 opacity-70'>
                    <AiOutlineUsergroupDelete className='text-5xl text-blue-700'/>
                </span>
                <div>
                    <h3 className='text-4xl'>
                        <CountUp end={chefs.length} duration={chefs.length/5}/>
                    </h3>
                    <p className='uppercase'>total users</p>
                </div>
            </div>
        </div>
        <Chart options={chartOption.options} series={chartOption.series} type='line' height={550}/>
    </div>
  )
}
