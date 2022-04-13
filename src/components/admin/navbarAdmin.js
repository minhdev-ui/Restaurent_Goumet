import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../images/restaurant3-w1.png";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const usePathName = () => {
  const location = useLocation();
  return location.pathname;
};


const navigation = [
  { name: "Users", href: "/admin/adminPage/users", current: true },
  { name: "Menus", href: "/admin/adminPage/menus", current: false },
  { name: "Chefs", href: "/admin/adminPage/chefs", current: false },
  { name: "Orders", href: "/admin/adminPage/orders", current: false},
  { name: "Total", href: "/admin/adminPage/total", current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminPage() {
  const location = usePathName();
  navigation.map((item) => {
    location === item.href ? (item.current = true) : (item.current = false);
  });
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8" src={logo} alt="Workflow" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <a href="/admin">
                        <button className="text-white pr-3 hover:translate-x-2 duration-300">
                          <span>Sign Out</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between w-full">
            {navigation.map((item) => item.current && (
              <>
                <h1 className="text-3xl font-bold text-gray-900">
                  {item.name}
                </h1>
              </>
            ))}
          </div>
        </header>
      </div>
    </>
  );
}
