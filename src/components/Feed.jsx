import React, { useState , useContext, useEffect } from 'react'
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav"
import VideoCard from './VideoCard';

const Feed = (props) => {
  
  
  const { loading, searchResults } = useContext(Context);
  
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  }, [])


  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav theme={props.theme}/>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto " style={{background:props.theme==="dark"?"black":"white"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && searchResults &&
          searchResults?.map( (item, i) => {
            if (item?.type !== "video") return false;
            return (
              <VideoCard 
              key={item.video.videoId} 
              video={item.video} theme={props.theme}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feed
