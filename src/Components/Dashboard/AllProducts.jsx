import React, { useEffect, useState } from 'react'

const getProducts = async () => {
    try {
        const res = await fetch(`https://task-api-eight-flax.vercel.app/api/products`)
        const data = res.json()
        return data
    }
    catch (er) {
        console.log(er.message)
    }
}

const AllProducts = () => {

    const [productData, setproductData] = useState([]);

    const iconStyles = [
        { bg: "bg-blue-100", color: "#3B82F6" },
        { bg: "bg-green-100", color: "#22C55E" },
        { bg: "bg-purple-100", color: "#A855F7" },
        { bg: "bg-orange-100", color: "#F97316" },
    ];



    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setproductData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className=''>
            <div className='flex items-center justify-between mb-3'>
                <h2 className='font-bold'>Products </h2>
                <button className='px-3 py-1 text-center  border-2 border-green-950 rounded-full'>+ New</button>
            </div>

            <div className='grid grid-cols-1 gap-2'>
                {
                    productData.map((data, index) =>

                        <div className='flex items-center gap-2'>
                            <div className={`${iconStyles[index].bg} p-4 w-[20px] h-[20px] rounded-xl flex flex-col items-center justify-center gap-1`}>
                                <div className='flex  items-center gap-0.5'>
                                    <span className='bg-[#609af6] w-1.5 h-1.5'></span>
                                    <span className='bg-[#3B82F6] w-1.5 h-1.5'></span>
                                </div>
                                <div className='flex items-center gap-0.5'>
                                    <span className='bg-[#3B82F6] w-1.5 h-1.5'></span>
                                    <span className='bg-[#3B82F6] w-1.5 h-1.5'></span>
                                </div>
                            </div>

                            <div className='flex flex-col '>
                                <p className='text-sm font-bold text-gray-800'>{data.name}</p>
                                <p className='text-sm text-gray-300'>Price:${data.price}</p>
                            </div>
                        </div>

                    )
                }
            </div>


        </div>
    )
}

export default AllProducts