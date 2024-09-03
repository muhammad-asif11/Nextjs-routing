import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const ArchivedNotification = () => {
  return (
    <Card>
      <h1>Archived Notification</h1>
      <Link href='/dashboard' className="text-blue-700">Default</Link>
    </Card>
  )
}

export default ArchivedNotification
