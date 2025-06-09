"use client"

import { useQuery } from '@tanstack/react-query'
import { request } from '@/api'

interface QueryWrapperProps {
  children: (data: any) => React.ReactNode
}

export default function QueryWrapper({ children }: QueryWrapperProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['yourData'],
    queryFn: async () => {
      const response = await request.get('/your-api-endpoint')
      return response.data
    }
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return children(data)
} 