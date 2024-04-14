import {useEffect, useState} from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import {getNews} from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList.jsx'

const Main = () => {
    // полученные новости устанавливаем в стейт
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch (e) {
                console.log(e)
            }
        }
        // получили новости
        fetchNews()
    }, [])

    // рисуем полученные новости
    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
            <NewsList news={news}/>
        </main>
    );
};

export default Main;
