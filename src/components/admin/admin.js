import logo from '../../images/restaurant3-w1.png'
import { LockClosedIcon } from "@heroicons/react/solid";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JSON_API from './Constant';
import './admin.scss'
const AdminLogin = () => {
    const url = `${JSON_API}/users`
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function getUser() {
     await fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
    }
    useEffect(() => {
      getUser()
    }, [])
    const checkUser =(obj={}) => {
      const userCheck = users.map((item) => {
        let check
        check = item.username == obj.username && item.password == obj.password ? 1 : 0
        return check
      })
        userCheck.includes(1) ? navigate("../admin/adminPage/users", {replace: true}) : alert("Đăng nhập thất bại")
  }
    const handleLogin = (e) => {
        e.preventDefault()
        checkUser({username: username, password: password})
    }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={logo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='relative h-16'>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none input absolute block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username" className='absolute top-0 left-0 py-2 px-3 inline-block text-gray-500 duration-300'>
                Username
              </label>
            </div>
            <div className='relative h-10'>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none input absolute bg-transparent block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className='absolute top-0 left-0 py-2 px-3 inline-block text-gray-500 duration-300'>
                Password
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdminLogin;
