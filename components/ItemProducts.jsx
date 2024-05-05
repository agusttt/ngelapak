import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from "@/lib/services"
import { FaStar, FaRegStar } from "react-icons/fa"
function ItemProducts(props) {
    return (
        <div className="w-4/12 p-4">
            <div className="border-[1px] border-gray-200 border-solid rounded-lg min-h-6 p-3 flex flex-col gap-4">
                <div className="relative">
                    {/* <Image src="/images/81fPKd-2AYL._AC_SL1500_.jpg" width={1049} height={1500} alt="" /> */}
                    {/* {
                        props.imageproduct && <Image src={`/${props.imageproduct}`} width={1049} height={1500} alt="" />
                    } */}
                    <Image src={`${props.imageproduct ? props.imageproduct : "images/no-image-square.jpg"}`} width={1049} height={1500} alt="" />
                </div>
                {/* <Link href="/" className="bg-slate-400 rounded-lg text-white px-4 py-3 text-center hover:bg-black">Buy Now</Link> */}
                <Link href={`${props.buttonproduct ? props.buttonproduct : "/"}`} className="bg-slate-400 rounded-lg text-white px-4 py-3 text-center hover:bg-black">See details</Link>
                <h5 className="text-lg">{props.category ? props.category : "no category"}</h5>
                {/* <h2 className="text-3xl font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2> */}
                <h2 className="text-3xl font-bold">{props.titleproduct ? props.titleproduct : "title not found"}</h2>
                <div className="flex gap-1">
                    {
                        Array.from({ length: 5 }, (_, i) => {
                            return i < props.rate ? <FaStar key={i} /> : <FaRegStar key={i} />;
                        })
                    }
                </div>
                {/* <div className="flex justify-center text-lg opacity-75">$109.95</div> */}
                <div className="flex justify-center text-lg opacity-75">{props.prices ? props.prices : "prices NaN"}</div>
            </div>
        </div >
    )
}

export default ItemProducts
