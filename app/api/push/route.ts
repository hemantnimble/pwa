import webpush from 'web-push'

webpush.setVapidDetails(
  'mailto:admin@yourapp.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

export async function POST(req: Request) {
  const subscription = await req.json()

  await webpush.sendNotification(
    subscription,
    JSON.stringify({
      title: 'Hello 👋',
      body: 'Push notification is working!',
    })
  )

  return Response.json({ success: true })
}
