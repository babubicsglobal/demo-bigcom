"use client"; // This is a client component
import { client } from "@/lib/contentful/client";
import React, { useState, useEffect } from "react";
import { bigcommerceClient } from "@/lib/bigcommerce/auth";
import { Management } from "@space48/bigcommerce-api";

const bigCommerce = new Management.Client({
  storeHash: "vsswcwmpjr",
  accessToken: "dgtsnbwbi2gvbewborkhqv8hi7ybxv2",
});

export default function ThreeItemGrid() {
  const getCommerceProduct = async () => {
    const response = await client.getEntries({ content_type: "product" });
    console.log("products", response.items);
  };

  async function printAllProducts() {
    // list() sends one HTTP request at a time and only sends requests as the iterator is consumed
    const products = bigCommerce.v3.list("/catalog/products", {
      query: { include: ["images"] },
    });
    for await (const product of products) {
      console.dir(product);
    }
  }
  bigcommerceClient.get("/catalog/products").then((data) => {
    console.log(data, "data");
  });

  useEffect(() => {
    getCommerceProduct();
    printAllProducts();
  }, []);
  return (
    <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2">
      <div className="lg:col-span-4 lg:row-span-2">Image 1</div>
      <div className="lg:col-span-2 lg:row-span-1">Image 2</div>
      <div className="lg:col-span-2 lg:row-span-1">Image 3</div>
    </section>
  );
}
