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
    <div className='border-b-2 border-richblack-600 h-12'>
      <div className='sm:px-[13%] text-white flex flex-row justify-between items-center'>
        <Link to={"/"}><img src={Logo} alt="CourseKing Logo" /></Link>
        <nav>
          <ul className='flex flex-row gap-4 z-100'>
            {
              NavbarLinks.map((e, i) => (
                <li key={i}>
                  {
                    e?.path ? 
                    <Link className={`${checkPath(e?.path)?"text-yellow-25" : "" }`} to={e?.path}>{e?.title}</Link>
                    : e?.title === "Catalog" ? (
                      <div className='relative flex items-center gap-1 group'>
                        <p>{e?.title}</p><MdKeyboardArrowDown/>
                        <div className='invisible absolute flex flex-col rounded-md bg-richblack-5 p-2 text-richblack-900 opacity-1 transition-all duration-200 translate-y-[70px] translate-x-[-70px] w-[150px] group-hover:visible'>
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
            user && user?.accountType != "Instructor" && (
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