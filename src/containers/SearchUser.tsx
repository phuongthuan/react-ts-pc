import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  id: number
  login: string
  url: string
  avatar_url: string
  html_url: string
}

const SearchUser: React.FC<User> = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<{ message: string }>({ message: '' })

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users`)
        setUsers(data)
      } catch (error) {
        setError({ message: error.message })
      }
    }
    fetchGithubUser()
  }, [])

  return (
    <div>
      <pre>
        {JSON.stringify(users, undefined, 2)}
      </pre>
      {error && <small>{error.message}</small>}
    </div>
  )
}

export default SearchUser
