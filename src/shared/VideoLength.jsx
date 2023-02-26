import React from 'react'
import moment from 'moment'

const VideoLength = ({time}) => {
    let videoLengthInSeconds;
    time >= 3600 ? videoLengthInSeconds = moment().startOf("day").seconds(time).format("H:mm:ss") : videoLengthInSeconds = moment().startOf("day").seconds(time).format("mm:ss")
  return (
    <div className='absolute bottom-2 right-2 py-1 px-2 text-white text-xs rounded-full' style={{background:"#046ec4"}}>
      {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength
