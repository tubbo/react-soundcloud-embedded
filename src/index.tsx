import React, { ReactElement } from 'react'

export type SoundCloudEmbeddedProps = {
  width: number | string
  height: number | string
  url: string
  autoPlay: boolean
  hideRelated: boolean
  showComments: boolean
  showUser: boolean
  showReposts: boolean
  visual: boolean
  color: string
}

export default function SoundCloudEmbedded(
  {
    url,
    width,
    height,
    autoPlay,
    hideRelated,
    showComments,
    showUser,
    showReposts,
    visual,
    color
  }: SoundCloudEmbeddedProps = {
    width: '100%',
    height: '450px',
    url: 'https://soundcloud.com/icebound/dusty-breaks-at-the-bottom-of-the-random-crates',
    autoPlay: false,
    hideRelated: false,
    showComments: true,
    showUser: true,
    showReposts: false,
    visual: true,
    color: 'ff5500'
  }
): ReactElement {
  const src = visual
    ? `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`
    : `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`

  return (
    <iframe
      width={width}
      height={visual ? height : 'auto'}
      scrolling="no"
      frameBorder="no"
      src={src}
    />
  )
}
