import React from "react"
import "./blog.css"
import { cblog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import "./indexall.css"
import { Link } from "react-router-dom"
import { RWebShare } from "react-web-share";
export const Ccard = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {cblog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p className="p">{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>

            <RWebShare
                data={{
                    title: "{item.title}",
                    qurl: "",
                    body: "{item.desc.slice(0, 180)}",
                }}
                onClick={() =>
                    console.log("shared successfully!")
                }
            >
                <button>SHARE</button>
            </RWebShare>
                  

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}