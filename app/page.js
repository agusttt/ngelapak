"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import FilterData from "@/components/FilterData";
import ShortData from "@/components/ShortData";
import Basecontent from "@/components/basecontent";
import ProductList from "@/components/ProductList";
export default function Home() {
  return (
        <div className="wrapper">
        <Basecontent>
        <div className="my-7">
            <div className="flex items-center justify-between w-full">
                <FilterData/>
                <ShortData/>
            </div>
            <ProductList/>
        </div>
        </Basecontent>
    </div>
  );
}
