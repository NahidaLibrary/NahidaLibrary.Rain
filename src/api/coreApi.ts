import axios from 'axios'

const coreApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/api/core-svc',
  timeout: 5000
})

coreApi.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log(error)
    throw error
  }
)

export interface Album {
  id: number
  name: string
}

export interface Music {
  id: number
  name: string
  link: string
}

export const listAlbum = async (): Promise<Album[]> => {
  const response = await coreApi.get('/music/listAlbum')
  return response.data.albumList
}

export async function listMusic(albumId: number): Promise<Music[]> {
  const resp = await coreApi.get('/music/listMusic', {
    params: {
      query: albumId
    }
  })
  return resp.data.musicList
}
