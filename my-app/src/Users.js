import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        {
          showActiveUsers ? (
            <h2>Showing active users</h2>
          ) : (
            <h2>Showing all users</h2>
          )
        }
    </div>
  )
}
