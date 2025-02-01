export default async function Page({
  params,
}: {
  params: Promise<{ m_id: string }>
}) {
  const slug = (await params).m_id
  return (
    < div className="text-white" >
      <h1>Tv Detail Page</h1>
      <p>Media ID: {slug}</p>
    </div >
  )
}
