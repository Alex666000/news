import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`https://api.currentsapi.services/v1/latest-news`, {
      params: {
        apiKey: API_KEY
      }
    })
    return response.data // Получили данные

  } catch (error) {
    console.log(error)
  }
}
