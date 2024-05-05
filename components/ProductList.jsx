"use client";
import React from 'react'
import ItemProducts from "@/components/ItemProducts";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";
export default function ProductList() {
    const getQuery = async () => {
        return await getData("/products")
    }

    const query = useQuery({
        queryKey: ["product"],
        queryFn: getQuery
    })

    if (query.isLoading) {
        return (
            <div className="wrapper relative flex justify-center mt-10">
                <div className="animate-pulse w-full flex gap-4">
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                </div>
            </div>
        )
    }

    if (query.error) {
        return (
            <div className="wrapper">
                <div className="bg-red-500 text-white text-center p-5 my-7">Error Network</div>
            </div>
        )
    }

    console.log(query.data.data)
    // return (
    //     <div className="relative flex flex-wrap -mx-4">
    //         <ItemProducts
    //             imageproduct="images/81fPKd-2AYL._AC_SL1500_.JPG"
    //             buttonproduct="BUY NOW"
    //             category="MENS"
    //             titleproduct="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    //             prices="$109.95" />
    //         <ItemProducts category="WOMEN" />
    //         <ItemProducts />
    //         <ItemProducts />
    //         <ItemProducts />
    //         <ItemProducts />
    //     </div>
    // )


    const myData = query.data.data
    return (
        <div className="relative flex flex-wrap -mx-4">
            {
                // Mapping data dengan Props
                myData.map(item => {
                    return (
                        <ItemProducts
                            imageproduct={item.image}
                            buttonproduct={`product/${item.id}`}
                            category={item.category}
                            titleproduct={item.title}
                            rate={parseInt(`${item.rating.rate}`)}
                        />
                    )
                })
            }
        </div>
    )
}