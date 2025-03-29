import { create } from 'zustand'

interface PostState {
  isLoading: boolean
  postData: (url: string, data: Record<string, any | number>) => Promise<void>
  patchData: (url: string, data: Record<string, any | number>) => Promise<void>
}

export const usePostStore = create<PostState>((set) => ({
  isLoading: false,

  postData: async (url, data) => {
    set({ isLoading: true })
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log('Post request failed but treated as success:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  patchData: async (url, data) => {
    set({ isLoading: true })
    try {
      await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log('Patch request failed but treated as success:', error)
    } finally {
      set({ isLoading: false })
    }
  },
}))
