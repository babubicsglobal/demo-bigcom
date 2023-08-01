"use client"; // This is a client component
import { client } from "@/lib/contentful/client";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const getBigcomProducts= async ()=> {
  const result = await axios.get("api/bigcomProducts")
  console.log("bigcommerce products", result);
}

export default function ThreeItemGrid() {
  const getCommerceProduct = async () => {
    const response = await client.getEntries({ content_type: "product" });
    console.log("contentful products", response.items);
  };

  useEffect(() => {
    getBigcomProducts();
    getCommerceProduct();
  }, []);
  return (
    <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2">
      <div className="lg:col-span-4 lg:row-span-2">Image 1</div>
      <div className="lg:col-span-2 lg:row-span-1">Image 2</div>
      <div className="lg:col-span-2 lg:row-span-1">Image 3</div>
    </section>
  );
}
