import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/Newscard/NewsCard';
import { useEffect } from 'react';
import { useState } from 'react';

const Category = () => {
    // const { id } = useParams();
    const categoryNews = useLoaderData();
    // const [categories, setCategories] = useState([]);  
        // if(categories === null){
        //     const name = "nothing to show"
        // }
        // else{
        //     const {name} = categories;
        // }
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => {
    //           const details = (data.find(category => category.id == id))
    //           setCategories(details)
    //         })
    //         .catch(error => console.log(error));
    //     }, [id]);
        
    return (
        <div>
            {/* { categories ?
                <h2>{categories.name}</h2>
                :
                <h2>nothis to show</h2>
                
                } */}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;