import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import Sell from "@mui/icons-material/Sell";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import Logout from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AuthService from "../services/auth-services";
import Router, { useRouter } from "next/router";
import guestCred from "../consts/guestcred";
import {
  reloadWithQueryParams_NoMessage,
  truncateString,
  useScreenSize,
} from "../services/utility";
import { clickEvent } from "../services/analytics";

interface SettingsMenuProps {
  isCreator: boolean;
  atDashboard: boolean;
}

const SettingMenu = ({ isCreator, atDashboard }: SettingsMenuProps) => {
  const router = useRouter();
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  return (
    <div
      className="outline text-blue-500 outline-offset-0 py-1 font-bold rounded"
      style={{
        fontSize: 18,
        textAlign: "center",
        zIndex: 10,
        outlineWidth: "thin",
        marginTop: "2px",
        maxHeight: 40,
      }}
    >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-1 text-sm font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div
              style={{
                paddingTop: "2px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {ismobile
                ? truncateString(AuthService.getUsername(), 10)
                : AuthService.getUsername()}
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
          {AuthService.getUsername() != guestCred[0] ? (
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {ismobile && !atDashboard ? (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-blue-500"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      style={{ fontSize: 16 }}
                      onClick={() => {
                        Router.push({
                          pathname: "/dashboard",
                        });
                      }}
                    >
                      <DashboardIcon
                        className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                        aria-hidden="true"
                        style={{ marginRight: "5px" }}
                      />
                      <div>Dashboard</div>
                    </button>
                  )}
                </Menu.Item>
              ) : (
                <></>
              )}
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
                      clickEvent("RedirectToEditProfile");
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
              {isCreator ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-500 text-white" : "text-blue-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        style={{ fontSize: 16 }}
                        onClick={() => {
                          Router.push({
                            pathname: "/bankinfo",
                          });
                          clickEvent("RedirectToBankInfo");
                        }}
                      >
                        <AccountBalanceIcon
                          className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                          aria-hidden="true"
                          style={{ marginRight: "5px" }}
                        />
                        <div>Banking</div>
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
                          clickEvent("RedirectToRevenue");
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
                </>
              ) : (
                <></>
              )}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-blue-500"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    style={{ fontSize: 16 }}
                    onClick={() => {
                      Router.push({
                        pathname: "/orders",
                      });
                      clickEvent("RedirectToOrders");
                    }}
                  >
                    <Sell
                      className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Orders</div>
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
                      clickEvent("Logout");
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
          ) : (
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-blue-500"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    style={{ fontSize: 16 }}
                    onClick={() => {
                      AuthService.logout();
                      reloadWithQueryParams_NoMessage(router);
                      clickEvent("GuestLogout");
                    }}
                  >
                    <Logout
                      className="w-5 h-5 ml-2 -mr-1 text-gray-300"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    />
                    <div>Sign In</div>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </Transition>
      </Menu>
    </div>
  );
};

export default SettingMenu;
