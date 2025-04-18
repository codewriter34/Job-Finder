import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {

    const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)

  return (
    <div className='container px-20 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/* side bar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* search filter from hero component. retriving ssearch value from input when search is clicked and 
        display inside navbar */}
        {
            isSearched && ( searchFilter.title !== "" || searchFilter.location != "" ) && (
                <>
                    <h3 className='font-medium text-lg mb-4'>Current Searched</h3>
                    <div className='mb-4 text-gray-600'>
                        {searchFilter.title && (
                            <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                                {searchFilter.title}
                                <img onClick={ e => setSearchFilter(prev =>({...prev, title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                         {searchFilter.location && (
                            <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                                {searchFilter.location}
                                <img onClick={ e => setSearchFilter(prev =>({...prev, location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                            </span>
                        )}
                        {/* categories filter */}
                        <div className='max-lg:hidden'>
                            <h4 className='font-bold text-lg py-4'>Search by Categories</h4>
                            <ul className='space-y-4 text-gray-600'>
                                {/* to create the categories wen use assest.js file where we have added the categories in an array */}
                                {
                                    //retrieves categories from assets.js file and map through it to display the categories
                                    JobCategories.map((category, index)=>(
                                        <li className='flex gap-3 items-center' key={{index}}>
                                            <input className='scale-125' type="checkbox" name='' id='' />
                                            {category}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* location filter */}
                        <div className='max-lg:hidden'>
                            <h4 className='font-bold text-lg py-4 pt-14'>Search by Location</h4>
                            <ul className='space-y-4 text-gray-600'>
                                {
                                    //retrieves location from assets.js file and map through it to display the categories
                                    JobLocations.map((location, index)=>(
                                        <li className='flex gap-3 items-center' key={{index}}>
                                            <input className='scale-125' type="checkbox" name='' id='' />
                                            {location}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </>
            )
        }

      </div>
        {/* Job Listing */}
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8'>Get your dream job from companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                {jobs.map((job,index)=>(
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </section>
    </div>
  )
}

export default JobListing
