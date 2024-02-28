import Image from "next/image";
import { Button } from "@/components/ui/button"
import FilterData from "@/components/filterData";
import ShortData from "@/components/ShortData";
export default function Home() {
  return (
        <div className="wrapper">
        <div className="my-7">
            <div className="flex items-center justify-between w-full">
                <FilterData/>
                <ShortData/>
                {/* Test */}
            </div>
        </div>
    </div>
  );
}
