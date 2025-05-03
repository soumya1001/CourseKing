import React from 'react'
import HighlightedText from '../components/core/homepage/HighlightedText'
import BannerImage1 from '../assets/Images/aboutus1.webp'
import BannerImage2 from '../assets/Images/aboutus2.webp'
import BannerImage3 from '../assets/Images/aboutus3.webp'
function About() {
  return (
    <div>
        <section className=" bg-richblack-700 py-8 p-2 sm:px-[40px]">
            <div className='text-richblack-300 flex flex-col justify-center items-center'>
                <p className='py-6'>About Us</p>
                  <span className='font-semibold text-3xl text-center'>
                      <h1 className='text-richblack-5'>Driving Innovation in Online Education for a </h1><HighlightedText text={"Brighter Future"} />
                  </span>
                <p className='text-center'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </div>
            <div className='relative sm:h-[90px] lg:h-[150px]'>
                <div className='absolute grid grid-cols-3 justify-items-center sm:gap-6 gap-4 left-[50%] translate-x-[-50%] translate-y-[30%] w-[100%]'>
                    <img src={BannerImage1} alt="BannerImage for Coding Course"/>
                    <img src={BannerImage2} alt="BannerImage for Coding Course"/>
                    <img src={BannerImage3} alt="BannerImage for Coding Course"/>
                </div>
            </div>
            <div>

            </div>
        </section>
    </div>
  )
}

export default About