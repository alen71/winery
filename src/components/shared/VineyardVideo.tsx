import React, { useLayoutEffect, useRef } from 'react'

import Overlay, { overlayStyleProps } from './Overlay'

type Props = {
  videoLightOverlay?: overlayStyleProps['videoLight']
  videoDarkOverlay?: overlayStyleProps['videoDark']
}

const VineyardVideo = ({ videoLightOverlay, videoDarkOverlay }: Props) => {
  const videRef = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    videRef?.current?.play()
  }, [videRef])

  return (
    <>
      {videoLightOverlay && <Overlay videoLight={videoLightOverlay} />}
      {videoDarkOverlay && <Overlay videoDark={videoDarkOverlay} />}
      <video
        ref={videRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/vinarija-dumo-video.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default VineyardVideo
