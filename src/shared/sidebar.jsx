import React from 'react'
import {FcBullish} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigations'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../lib/consts/navigations'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses = 'flex items-center gap-2 font-light px-2 py-3';
export default function sidebar() {

  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish fontSize={25} />
        <span className="text-neutral-100 text-lg">Trade Market</span>
    </div>
    
    <div className='flex-1 py-8'> {/*py - padding top & bottom , px - padding left & right */}
     {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} />
     ))}
   </div>
   
   <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
    <SidebarLink key={item.key} item={item} />
   ))}
    

    <div className = {linkClasses}>
     <span className="text-red-600 text-xl"><HiOutlineLogout /></span><div className="text-red-600">Logout</div>
    </div>
   
   </div>
   </div>
  )
}

function SidebarLink({ item }) 
{
  const { pathname } = useLocation;
  return (
    <Link to={item.path} className = { linkClasses }>
     <span className="text-xl">{item.icon}</span>
     {item.label}
    </Link>
  )
}