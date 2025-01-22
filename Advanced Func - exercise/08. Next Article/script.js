function getArticleGenerator(articles) {
    
    return () => {

        if (articles.length > 0){

            const content = document.getElementById('content')
            const currentArticle = document.createElement('article')
            
            currentArticle.innerText = articles.shift()
            content.appendChild(currentArticle)
            
        }
    }
}
