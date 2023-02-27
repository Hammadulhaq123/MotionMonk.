import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideocard";

const VideoDetails = (props) => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState()
  const {id} = useParams();
  const { setLoading } = useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.add("custom-h")
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id])

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res)=>{
      console.log(res);
      setVideo(res);
      setLoading(false);
    })
  }
  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res)=>{
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    })
  }
  return (
    <div className="flex jusify-center flex-row h-[calc(100%-56px)]" style={{background: props.theme==="dark"?"black":"#fff"}}>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">

        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{backgroundColor:props.theme==="dark"?"#000000":"#fff"}}
            />
          </div>
          <div className="font-bold line-clamp-2 text-sm md:text-xl mt-4" style={{color:props.theme==="dark"?"#fff":"#046ec4"}}>
            {video?.title}
          </div>

          <div className="flex line-clamp-2 justify-between flex-col md:flex-row mt-4">
            <div className="flex justify-between">
              <div className="flex items-start h-20">
                <div className="flex h-11 w-11 rounded-full overflow-hidden cursor-pointer">
                  <img src={video?.author?.avatar[0]?.url} className="h-full w-full object-cover" />
                </div>
              
              <div className="flex flex-col ml-3 cursor-pointer">
                <div className="text-md font-semibold flex items-center" style={{color:props.theme==="dark"?"#fff":"#057ee1"}}>
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && 
                  <BsFillCheckCircleFill  className=' text-[12px] ml-1' style={{color:props.theme==="dark"?"#fff":"#057ee1"}}/>
                }
                </div>
                <div className="text-sm" style={{color:props.theme==="dark"?"rgba(130, 130, 130, 1)":"rgba(130, 130,130,1)"}}>
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
              </div>
            
            <div className="flex mt-4 md:mt-0" style={{color:props.theme==="dark"?"white":"white"}}>
              <div className="flex items-center justify-center h-11 px-6 rounded-full cursor-pointer" style={{background:props.theme==="dark"?"rgba(255,255,255,0.15)":"rgba(4,110,196,0.6)"}}>
                <AiOutlineLike className="text-xl mr-2" style={{color:props.theme==="dark"?"white":"white"}}/>
                <span>{`${abbreviateNumber(video?.stats?.likes, 2)} likes`}</span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-full ml-4 cursor-pointer" style={{background:props.theme==="dark"?"rgba(255,255,255,0.15)":"rgba(4,110,196,0.6)"}}>
              <FaShare className="text-xl mr-2" style={{color:props.theme==="dark"?"white":"white"}}/>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} shares`}</span>

              </div>

            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index)=>{
            if(item?.type !== "video") return false;
            return (
              <SuggestionVideoCard  key={index} video={item?.video} theme={props.theme}/>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default VideoDetails
