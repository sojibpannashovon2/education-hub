import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardCollege from './CardCollege';

const Home = () => {

    const [result, setResult] = useState([])
    // const colleges = useLoaderData();
    // setResult(colleges)

    useEffect(() => {

        fetch(`https://admission-hub-server-three.vercel.app/colleges`)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [result])

    const colleges = result.slice(0, 3)

    console.log(colleges);
    return (
        <div className='my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {
                colleges?.map(college => <CardCollege
                    key={college?._id}
                    college={college}
                ></CardCollege>)
            }
        </div>
    );
};

export default Home;