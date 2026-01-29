export async function subscribeUser() {
  const registration = await navigator.serviceWorker.ready

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  })

  await fetch('/api/push', {
    method: 'POST',
    body: JSON.stringify(subscription),
  })
}
