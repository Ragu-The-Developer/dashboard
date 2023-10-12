import React, { startTransition } from 'react'
import { Link } from 'react-router-dom'
export default function products() {
  return (
    <div className="text-6xl">This is a product page <Link to="/layout">Go To Layout Page</Link></div>
  )
}