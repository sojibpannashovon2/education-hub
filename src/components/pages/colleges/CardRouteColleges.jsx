import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Details from './Details';
import { data } from 'autoprefixer';

const CardRouteColleges = () => {
    const [result, setResult] = useState([])
    // const colleges = useLoaderData();
    // setResult(colleges)

    useEffect(() => {

        fetch(`https://admission-hub-server-three.vercel.app/colleges`)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [result])


    return (
        <div className='my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {
                result?.map(college => <Details
                    key={college?._id}
                    college={college}
                ></Details>)
            }
        </div>
    );
};

export default CardRouteColleges;