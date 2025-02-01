export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const [mediaType, mediaId] = (await params).slug
  console.log(mediaType, mediaId)
  return (
    < div className="text-white" >
      <h1>{mediaType.toUpperCase()} Detail Page</h1>
      <p>Media ID: {mediaId}</p>
    </div >
  )
}
