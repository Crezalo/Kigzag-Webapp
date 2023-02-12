import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import Sell from "@mui/icons-material/Sell";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import Logout from "@mui/icons-material/Logout";
import AuthService from "../services/auth-services";
import Router from "next/router";

const SettingMenu = () => {
  return (
    <div
      className="outline text-blue-500 outline-offset-0 py-1 font-bold rounded"
      style={{
        fontSize: 18,
        textAlign: "center",
        zIndex: 10,
        outlineWidth: "thin",
        marginTop: "2px",
      }}
    >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-1 text-sm font-bold text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div
              style={{
                paddingTop: "2px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {AuthService.getUsername()}
            </div>
            {/* <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
            <Settings
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-blue-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    Router.push({
                      pathname: "/editprofile",
                    });
                  }}
                >
                  <Person
                    className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Profile</div>
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-blue-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    Router.push({
                      pathname: "/updateprices",
                    });
                  }}
                >
                  <Sell
                    className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Prices</div>
                </button>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-blue-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    Router.push({
                      pathname: "/mypurchases",
                    });
                  }}
                >
                  <Sell
                    className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  />
                  <div>My Purchases</div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-blue-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    Router.push({
                      pathname: "/revenue",
                    });
                  }}
                >
                  <CurrencyRupee
                    className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Revenue</div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-blue-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    AuthService.logout();
                    window.location.reload();
                  }}
                >
                  <Logout
                    className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  />
                  <div>Logout</div>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SettingMenu;
