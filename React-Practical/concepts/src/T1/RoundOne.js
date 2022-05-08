// Create a mock function which returns a promise and resolves in between 1-2 seconds and return an id
// Call this function 10 times 
// DIsplay the result in a list view id/title format
// It should display in the same order as requested
// try to make it infinite scrolling

import { useState, useEffect } from "react";


function getArticle (id) {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res({
                id,
                title : 'Random title'
            })
        }, 1000 + Math.floor(Math.random()*1000));
    })
}

function ArticleWrapper () {
    let articles = [1,2,3,4,5,6,7,8,9,10];
    let articlePromiseMap = {}
    const [articlesPromise, setArticlesPromise] = useState([])
    useEffect(() => {
        setArticlesPromise(
            articles.map(id => {
                return {
                  id: id,
                  data : {},
                  promise : getArticle(id).then(d => {
                      setArticlesPromise(prevState => {})
                  })
                  
              }
            })
        )
      
    }, [])
    
    return (
        <ul>
            {articlesPromise.map((article) => (<>
                <div>
                    <span>{article.id} : </span>
                    <span>{article.title}</span>
                </div>
            </>))}
        </ul>
    )
}

export default ArticleWrapper;