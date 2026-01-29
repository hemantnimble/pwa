'use client'

import { subscribeUser } from '@/lib/push'

export default function EnablePush() {
  return (
    <button onClick={subscribeUser}>
      Enable Notifications
    </button>
  )
}
