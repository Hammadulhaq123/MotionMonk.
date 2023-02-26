import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/VideoLength';

const VideoCard = ({ video, theme }) => {
  return (
    <Link to={`/video/${video?.videoId}`} >
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} />
          {video?.lengthSeconds && (

            <VideoLength time={video?.lengthSeconds}/>
          )}
        </div>
        <div className="flex  mt-3" style={{color:theme==="dark"?"white":"#046ec4"}}>
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img src={video?.author?.avatar?.[0]?.url} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}
              </span>
              <span className='text-[12px] font-semibold  flex items-center' style={{color:theme==="dark"?"#fff":"#057ee1"}}>
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && 
                  <BsFillCheckCircleFill  className=' text-[12px] ml-1' style={{color:theme==="dark"?"#fff":"#057ee1"}}/>
                }
              </span>
              <div className="flex text-[12px] font-semibold  truncate overflow-hidden" style={{color:theme==="dark"?"#fff":"#057ee1"}}>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className='text-[24px] flex leading-none font-bold  relative top-[-10px] mx-1' style={{color:theme==="dark"?"#fff":"#057ee1"}}> . </span>
                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
