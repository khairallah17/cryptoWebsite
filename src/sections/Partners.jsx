import React from 'react'
import logo1 from "../../src/assets/image 2.png"
import logo2 from "../../src/assets/image 3.png"
import logo3 from "../../src/assets/image 4.png"
import logo4 from "../../src/assets/image 5.png"

const logos = [logo1,logo2,logo3,logo4]

const Partners = () => {
  return (
    <div className='px-6'>

        <div className="conatiner mx-auto rounded-3xl bg-[#0b010157] py-20 bg-logos">
            <div className="text-center">
                <h1 className="text-3xl capitalize font-bold mb-4">trusted partners worldwide</h1>
                <p>We're partners with countless major organisations around the globe</p>
            </div>
            <div className="mt-10">
                <div className="flex justify-center gap-6 flex-wrap">
                    {
                        logos.map(img => {
                            return (
                                <img src={img} alt="" />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Partners