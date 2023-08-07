"use client"; // This is a client component
import { client } from "@/lib/contentful/client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ThreeItemGrid() {
  const [commerceData, setCommerceData] = useState([]);

  const getBigcomProducts = async () => {
    const result = await axios.get("api/bigcomProducts");
    console.log("bigcommerce products", result);
    setCommerceData(result.data.data);
  };
  const getCommerceProduct = async () => {
    const response = await client.getEntries({ content_type: "product" });
    console.log("contentful products", response.items);
  };

  console.log(commerceData);

  useEffect(() => {
    getBigcomProducts();
    getCommerceProduct();
  }, []);
  return (
    // <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2">
    //   <div className="lg:col-span-4 lg:row-span-2">Image 1</div>
    //   <div className="lg:col-span-2 lg:row-span-1">Image 2</div>
    //   <div className="lg:col-span-2 lg:row-span-1">Image 3</div>
    // </section>
    <section>
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl font-extrabold dark:text-white mb-6">
            All Products
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {commerceData.map((item, index) => (
            <div
              key={index}
              className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={item.images[0]?.url_standard}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
