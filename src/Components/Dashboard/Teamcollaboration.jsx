import React, { useEffect, useState } from 'react'
const getUser = async () => {
    try {
        const res = await fetch(`https://task-api-eight-flax.vercel.app/api/users`)
        const data = res.json()
        return data
    }
    catch (er) {
        console.log(er.message)
    }
}
const Teamcollaboration = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser();
                setUsers(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className='font-bold'>Team Collaboration</h2>

            <div className='grid grid-cols-1'>
                {
                    users.map((user, index) =>
                        <div key={index} className='flex justify-between gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-sky-200 w-[30px] h-[30px] rounded-xl p-1'>
                                    <p className='text-gray-700 text-sm'>SM</p>
                                </div>


                                <div>
                                    <p className=' text-[12px] font-semibold text-gray-700'>{user?.name}</p>
                                    <p className='text-[12px] text-gray-400'>{user?.email}</p>
                                </div>
                            </div>

                            <div>
                                <button
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${user.status === "active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-amber-100 text-amber-700"
                                        }`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full ${user.status === "active"
                                                ? "bg-green-500"
                                                : "bg-amber-500"
                                            }`}
                                    ></span>
                                    {user?.status}
                                </button>

                                <p className="text-sm text-gray-400">
                                    {user?.joinDate}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Teamcollaboration