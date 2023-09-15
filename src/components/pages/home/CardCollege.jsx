import React from 'react';
import { Link } from 'react-router-dom';


// A section will contain 3 college cards that include college image, college name, admission dates, events, research history, and sports. 
const CardCollege = ({ college }) => {


    const { _id, college_image, college_name, admission_dates, events, research_history, sports } = college || {}
    console.log(college);


    // console.log(sports);
    // {
    //     admission_dates?.map(admission_date => <span>{admission_date} </span>)
    // }
    return (
        <div className="card card-compact w-full h-full bg-base-100 shadow-2xl border border-secondary text-black">
            <figure>
                <img className='h-48 w-80' src={college_image} alt="Not Found !!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{college_name}</h2>
                <h3><span className='font-bold'>Admission Date: </span>{admission_dates?.fall}</h3>
                <div className='flex gap-4'>
                    <div className='border border-secondary p-4 rounded-lg'>
                        <span className='font-bold '>Events: </span>
                        <ul>
                            {events?.map(event => <li className='list-decimal ml-6'>{event}</li>)}
                        </ul>
                    </div>
                    <div className='border border-secondary p-4 rounded-lg'>
                        <span className='font-bold '>Sports: </span>
                        <ul>
                            {sports?.categories?.map(sports => <li className='list-decimal ml-6'>{sports}</li>)}
                        </ul>
                    </div>
                </div>

                <p className='p-0'>
                    <span className='font-bold '>Research_history: </span>
                    {research_history}
                </p>

                <div className="card-actions justify-end">
                    <Link to={`/colleges/${_id}`} key={_id} className="btn btn-accent btn-outline btn-sm">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CardCollege;