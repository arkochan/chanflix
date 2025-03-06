"use client";
export default async function Button_WatchNow({ mediaId }: { mediaId: number }) {

  function nav(link: string) {
    window.location.href = link;
  }
  return <button onClick={() => nav(`/player/movie/${mediaId}`)} className="bg-slate-200 rounded-3xl px-4 py-2 shadow-current mt-4 text-black ">
    Watch Now
  </button >
}
