import Image from "next/image";
import { Button } from "@/components/ui/button"
import FilterData from "@/components/FilterData";
import ShortData from "@/components/ShortData";
import ItemProducts from "@/components/ItemProducts";
export default function Home() {
  return (
        <div className="wrapper">
        <div className="my-7">
            <div className="flex items-center justify-between w-full">
                <FilterData/>
                <ShortData/>
                <ItemProducts/>
                {/* Test */}
            </div>
        </div>
    </div>
  );
}
