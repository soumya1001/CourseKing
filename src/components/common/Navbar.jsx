import React, { useEffect, useState } from 'react'
import { Link,useLocation,matchPath } from 'react-router-dom'
import Logo from  "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { CiShoppingCart } from "react-icons/ci";
import ProfileDropdown from '../core/auth/ProfileDropdown'
import {apiConnector} from '../../services/apiConnector'
import {categories} from '../../services/apis'
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  const {token} = useSelector((state) => state.auth)
  const {user} = useSelector((state) => state.profile)
  const {totalItems} = useSelector((state) => state.cart)
  const location = useLocation() 
  const [subLinks,setSubLinks] = useState([])
  const fetchSublinks = async()=>{
    try {
      const result = await apiConnector("GET",categories.CATEGORIES_API)
      setSubLinks(result.data.data)
    } catch (error) {
      console.log("Could no fetch catelog list!!");
    }
  }
  useEffect(()=>{
    fetchSublinks()
  },[])
  const checkPath = (path)=>{
    return matchPath(path,location.pathname)
  }
  return (
    <div className='border-b-2 border-richblack-600 py-1 bg-richblack-700'>
      <div className='sm:px-[13%] text-white flex flex-row justify-between items-center'>
        <Link to={"/"}><img className='object-contain' src={Logo} alt="CourseKing Logo" /></Link>
        <nav>
          <ul className='flex flex-row gap-4 z-100'>
            {
              NavbarLinks.map((e, i) => (
                <li key={i}>
                  {
                    e?.path ? 
                    <Link className={`${checkPath(e?.path)?"text-yellow-25 font-semibold" : "" }`} to={e?.path}>{e?.title}</Link>
                    : e?.title === "Catalog" ? (
                        <div className='relative flex items-center gap-1 group z-50'>
                          <p>{e?.title}</p><MdKeyboardArrowDown />
                          <div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[30px] top-[50%] flex flex-col rounded-md bg-richblack-5 p-2 text-richblack-900 transition-all duration-200 group-hover:visible sm:min-w-[150px]'>
                            <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-35%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                            </div>
                            <p>Python</p>
                            <p>Java</p>
                            <p>React</p>
                          </div>

                        </div>
                    ) : ""
                  }
                </li>
              ))
            }
          </ul>
        </nav>
        <div className='flex flex-row gap-x-4 items-center'>
          {
            user && user?.accountType !== "Instructor" && (
              <Link to={"/dashboard/cart"}>
                <CiShoppingCart />
                {
                  totalItems > 0 && (
                    <span>{totalItems}</span>
                  )
                }
              </Link>
              
            )
          }
          {
            token === null && (
              <Link to={"/signup"}>
                <button className='border border-richblack-700 bg-richblack-800 px-[16px] py-[5px] text-richblack-100 rounded-md'>
                  Sign Up
                </button>
              </Link>
            )
          }
          {
            token === null && (
              <Link to={"/login"}>
                <button className='border border-richblack-700 bg-richblack-800 px-[16px] py-[5px] text-richblack-100 rounded-md'>
                  Login
                </button>
              </Link>
            )
          }
          {
            token != null && <ProfileDropdown/>
          }
        </div>
      </div>
    </div>
  )
} 

export default Navbar