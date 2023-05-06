import React from 'react'
import imgW from '/assets/weez3.jpg'

import InstagramImg from "./InstagramImg"

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on instagram</p>
      <p className="pb-4">@weezkitchen</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg = {imgW} />
        <InstagramImg socialImg = {imgW} />
        <InstagramImg socialImg = {imgW} />
        <InstagramImg socialImg = {imgW} />
        <InstagramImg socialImg = {imgW} />
        <InstagramImg socialImg = {imgW} />


      </div>
    </div>
  )
}

export default Instagram