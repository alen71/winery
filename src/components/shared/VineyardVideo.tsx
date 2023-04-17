import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import Overlay, { overlayStyleProps } from './Overlay'
import vineyardImg from '/public/video-picture.jpg'

type Props = {
  videoLightOverlay?: overlayStyleProps['videoLight']
  videoDarkOverlay?: overlayStyleProps['videoDark']
}

const VineyardVideo = ({ videoLightOverlay, videoDarkOverlay }: Props) => {
  const [isDuckDuckGo, setIsDuckDuckGo] = useState(false)
  const videRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videRef?.current?.play()
  }, [videRef])

  useEffect(() => {
    setIsDuckDuckGo(navigator.userAgent.indexOf('DuckDuckGo') !== -1)
  }, [])

  return (
    <>
      {videoLightOverlay && <Overlay videoLight={videoLightOverlay} />}
      {videoDarkOverlay && <Overlay videoDark={videoDarkOverlay} />}
      {isDuckDuckGo ? (
        <div className="w-full h-full z-0">
          <Image
            src={vineyardImg}
            alt="vineyard dumo"
            style={{
              objectFit: 'cover',
              zIndex: 0,
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      ) : (
        <video
          ref={videRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vinarija-dumo-video.mp4" type="video/mp4" />
          <source src="/vinarija-dumo-video.webm" type="video/webm" />
          <source src="/vinarija-dumo-video.ogg" type="video/ogg" />
        </video>
      )}
    </>
  )
}

export default VineyardVideo
