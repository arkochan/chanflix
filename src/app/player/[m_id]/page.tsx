"use client";
import React from 'react';
import ReactPlayer from 'react-player';

export default function Page({
}) {
  const videoUrl = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"

  return (
    <div className="text-white">
      <h1>Player Page</h1>
      <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
    </div>
  );
}
