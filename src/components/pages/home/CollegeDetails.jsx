import React from 'react';
import { useLoaderData } from 'react-router-dom';


// the college details including images, and college names. admission process, events details, research works, and sports categories in a detailed way

// authors
// : 
// "Emily Brown"
// description
// : 
// "This research paper highlights recent breakthroughs in biotechnology and their potential applications."
// publication_date
// : 
// "June 2023"
// title
// : 
// "Advancements in Biotechnology"

const CollegeDetails = () => {
    const details = useLoaderData()

    const { _id, college_image, college_name, admission_dates, admission_process, research_history, sports_details, events_details, research_works } = details || {}
    console.log(details);

    return (
        <div className=" card card-side bg-base-100 text-black shadow-2xl my-10 border border-secondary ">
            <figure className='w-1/2  p-5'>
                <img className='h-full w-full  border border-primary shadow-lg rounded-xl' src={college_image} alt="Not Found" />
            </figure>
            <div className="card-body w-1/2 ">
                <h2 className="card-title font-bold">{college_name}</h2>
                <h3><span className='font-bold'>Admission Date: </span>{admission_dates?.fall}</h3>
                <p className='p-0'>
                    <span className='font-bold '>Research_history: </span>
                    {research_history}
                </p>
                <p className='p-0'>
                    <span className='font-bold '>Admission_process: </span>
                    {admission_process}
                </p>
                <div>
                    <div>
                        <span className='font-bold '>Event-details: </span>
                        {events_details}
                    </div>
                    <span className='font-bold text-green-500 text-2xl'>Research_works</span>
                    <div className='border border-secondary p-4 my-4 lg:md:flex'>


                        <div>
                            <span className='font-bold '>Author-Name: </span>
                            {research_works?.authors}
                            <br />
                            <span className='font-bold '>Description: </span>
                            {research_works?.description}
                            <hr className='my-4' />

                            <div>
                                <span className='font-bold '>Title: </span>
                                {research_works?.title}
                                <br />
                                <span className='font-bold '>Publication_date: </span>
                                {research_works?.publication_date}
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;