import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router'

function PostCard({ $id, Title, FeaturedImage, status }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-72 h-60 bg-white border border-sky-200 shadow-lg rounded-xl font-family-serif p-4 flex flex-col items-center'>
        <div className='w-full flex items-center justify-center mb-4'>
          <img src={service.getFilePreview(FeaturedImage)} alt={Title}
            className='rounded-xl max-h-35' />

        </div>
        <h2
          className='text-xl font-bold text-center'
        >{Title}</h2>
        {status !== "active" && (
          <span className=" text-red-500 text-xs font-bold px-2 py-1 rounded">
            Inactive
          </span>
        )}
      </div>
    </Link>
  )
}


export default PostCard