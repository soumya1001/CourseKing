import React from 'react'
import HighlightedText from '../components/core/homepage/HighlightedText'
import BannerImage1 from '../assets/Images/aboutus1.webp'
import BannerImage2 from '../assets/Images/aboutus2.webp'
import BannerImage3 from '../assets/Images/aboutus3.webp'
import InfoCard from '../components/core/aboutpage/InfoCard'
import FoundingStory from "../assets/Images/FoundingStory.png"
import Stats from '../components/core/aboutpage/Stats'
import ContactUs from '../components/core/aboutpage/ContactUs'

function About() {
  return (
    <div className="">
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex  max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-3xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightedText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[90px] lg:h-[150px]"></div>
          <div className="absolute sm:w-[80%] bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>
      <section className="sm:px-[40px] p-2 border-b border-richblack-700">
        <div className="mx-auto flex max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <div className=" text-xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-white">
            We are passionate about revolutionizing the way we learn. Our
            innovative platform <HighlightedText text={"combines technology"} />,{" "}
            <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
              {" "}
              expertise
            </span>
            , and community to create an
            <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
              {" "}
              unparalleled educational
              experience.
            </span>
          </div>
        </div>
      </section>
      <section className='sm:px-[40px] p-2'>
        <div className='flex flex-col sm:flex-row justify-between py-10 items-center'>
          <div className='sm:w-[45%]'><InfoCard fromColor={"from-[#833AB4]"} via={"via-[#FD1D1D]"} toColor={"from-[#FD1D1D]"} title={"Our Founding Story"} desc={"Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world."} desc2={"As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."} /></div>
          <div className='sm:w-[45%] py-5 md:p-0'>
            <img
              src={FoundingStory}
              alt=""
              className="shadow-[0_0_20px_0] shadow-[#FC6767]"
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between pb-10 md:py-10'>
          <div className='sm:w-[45%]'><InfoCard fromColor={"from-[#FF512F]"} toColor={"to-[#F09819]"} title={"Our Vision"} desc={"With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."} /></div>
          <div className='sm:w-[45%] pt-10 md:pt-0'><InfoCard fromColor={"from-[#1FA2FF]"} toColor={"via-[#12D8FA]"} title={"Our Mission"} desc={"our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."} /></div>
        </div>
      </section>
      <section className='bg-richblack-700 sm:px-[40px] p-2'>
        <Stats/>
      </section>
      {/* get in touch form */}
      <section>
        <ContactUs/>
      </section>
    </div>
  )
}

export default About