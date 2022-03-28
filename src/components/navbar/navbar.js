import { Link, useLocation } from "react-router-dom";
import logo from "../../images/restaurant3-w.png";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import './navbar.scss'

const usePathName = () => {
  const location = useLocation()
  return location.pathname
}

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Menu", href: "/menu", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = usePathName()
  navigation.map((item) => {
    location === item.href ? item.current = true : item.current = false
  })
  const [title, setTitle] = useState(document.title)
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 tablet:px-6 laptop:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center tablet:items-stretch tablet:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block laptop:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden laptop:block h-10 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden tablet:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-primary text-white"
                            : "text-gray-300",
                          "px-3 py-2 rounded-md text-sm font-medium nav-link duration-300"
                        )}
                        onClick = {() => {
                          setTitle(item.name)
                        }}
                      >
                        <span>
                          {item.name}
                        <div className="bgOverlay"></div>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center tablet:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="tablet:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button className="w-full">
                  {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick = {() => {
                          setTitle(item.name)
                        }}
                      >
                        {item.name}
                      </Link>
                  ))}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
