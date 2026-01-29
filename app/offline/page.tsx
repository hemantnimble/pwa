export default function OfflinePage() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1>You’re offline</h1>
      <p>Please check your internet connection.</p>
    </main>
  )
}
