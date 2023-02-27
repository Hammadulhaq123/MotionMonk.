import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/VideoLength';


const SuggestionVideocard = ({ video, theme }) => {
  return (
    <Link to={`/video/${video?.videoId}`} >
      <div className="flex mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} />
          {video?.lengthSeconds && (

            <VideoLength time={video?.lengthSeconds}/>
          )}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
              <span className='text-sm lg:text-xs xl:text-sm font-bold line-clamp-2' style={{color:theme==="dark"?"white":"#046ec4"}}>
                {video?.title}
              </span>
              <span className='text-[12px] lg:text-[10px] xl:text-[12px] mt-2 font-semibold  flex items-center' style={{color:theme==="dark"?"#fff":"#057ee1"}}>
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && 
                  <BsFillCheckCircleFill  className=' text-[12px] lg:text-[10px] xl:text-[12px] ml-1' style={{color:theme==="dark"?"#fff":"#057ee1"}}/>
                }
              </span>
              <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  truncate overflow-hidden" style={{color:theme==="dark"?"#fff":"#057ee1"}}>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className='text-[24px] flex leading-none font-bold  relative top-[-10px] mx-1' style={{color:theme==="dark"?"#fff":"#057ee1"}}> . </span>
                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
      </div>
    </Link>
  )
}

export default SuggestionVideocard
