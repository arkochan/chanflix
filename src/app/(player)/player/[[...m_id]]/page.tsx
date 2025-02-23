// "use client";
import React from 'react';
import ReactPlayer from 'react-player';

export default async function Page({
  params,
}: {
  params: Promise<{ m_id: string[] }>;
}) {

  var [mediaType, mediaId, season, ep] = (await params).m_id
  var videasyUrl: string
  if (mediaType === "movie") {
    videasyUrl = `https://player.videasy.net/${mediaType}/${mediaId}`
  }
  else if (mediaType === "tv") {
    videasyUrl = `https://player.videasy.net/${mediaType}/${mediaId}/${season}/${ep}?nextEpisode=true&autoplayNextEpisode=true&episodeSelector=true&color=8B5CF6`
  }
  else return <div>COMING SOON</div>

  return (
    <div className="text-white">
      < iframe
        className='h-svh w-full'
        src={videasyUrl}
        allowFullScreen
        allow="encrypted-media"
      ></iframe >
    </div >
  );
}
