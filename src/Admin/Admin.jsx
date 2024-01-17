import React from "react";
import Layout from "../Components/Layout/Layout";
import * as IconsAndImages from "../Assets/IconsAndImages";
import DashboardTab from "./DashboardTabs";
function Admin() {
  console.log("Rendering Admin component");
  return (
    <div>
      <Layout>
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 px-4 py-4 mb-10">
          <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
            <img
              src={IconsAndImages.ProductsIcon}
              className="h-[70px] w-[70px]"
            />
            <h2 className="text-2xl font-semibold">10</h2>
            <h3 className="font-semibold">Total Products</h3>
          </div>
          <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
            <img src={IconsAndImages.UsersIcon} className="h-[70px] w-[70px]" />
            <h2 className="text-2xl font-semibold">10</h2>
            <h3 className="font-semibold">Total Users</h3>
          </div>
          <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
            <img
              src={IconsAndImages.OrdersIcon}
              className="h-[70px] w-[70px]"
            />
            <h2 className="text-2xl font-semibold">10</h2>
            <h3 className="font-semibold">Total Orders</h3>
          </div>
          <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
            <img src={IconsAndImages.ValueIcon} className="h-[70px] w-[70px]" />
            <h2 className="text-2xl font-semibold">10</h2>
            <h3 className="font-semibold">Total Value</h3>
          </div>
        </div>
        <DashboardTab/>
      </Layout>
    </div>
  );
}

export default Admin;
