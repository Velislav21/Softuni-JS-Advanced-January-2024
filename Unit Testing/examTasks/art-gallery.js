class ArtGallery {
    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = {
            picture: 200, // article models and points needed
            photo: 50,
            item: 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        let isInArray = false;
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }

        for (let article of this.listOfArticles) {

            if (article.articleName == articleName && article.articleModel == articleModel) {
                article.quantity += Number(quantity)
                isInArray = true;
                break;
            }
        }
        if (!isInArray) {
            let newArticle = { articleModel, articleName, quantity }
            this.listOfArticles.push(newArticle)
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        // let isPresent = false;
        let points = 0;
        for (let guest of this.guests) {

            if (guest.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        switch (personality) {
            case 'Vip': points = 500; break;
            case 'Middle': points = 250; break;
            default: points = 50;
        }

        let newGuest = { guestName, points, purchaseArticle: 0 }
        this.guests.push(newGuest)
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {

        let isFound = false;
        let foundArticle
        for (let article of this.listOfArticles) {
            if (article.articleName == articleName && article.articleModel == articleModel) {
                foundArticle = article;
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            throw new Error('This article is not found.')
        }

        if (foundArticle.quantity == 0) {
            return `The ${articleName} is not available.`
        }

        let isGuestFound = false;
        let guestFound
        for (let guest of this.guests) {
            if (guest.guestName == guestName) {
                guestFound = guest;
                isGuestFound = true;
                break;
            }
        }
        if (!isGuestFound) {
            return `This guest is not invited.`
        }
        if (guestFound.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        }else {
            foundArticle.quantity--;
            guestFound.points -= this.possibleArticles[articleModel];
            guestFound.purchaseArticle ++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria){
        let resultArr = []
        if(criteria == 'article'){
            resultArr.push('Articles information:');
            this.listOfArticles.forEach(a => resultArr.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
            return resultArr.join('\n')
        }else if (criteria == 'guest'){
            resultArr.push('Guests information:');
            this.guests.forEach(guest => resultArr.push(`${guest.guestName} - ${guest.purchaseArticle}`))
            return resultArr.join('\n')
        }

    }
}
const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);

artGallery.addArticle('Item', 'Ancient vase', 2);

artGallery.addArticle('picture', 'Mona Liza', 1);

artGallery.inviteGuest('John', 'Vip');

artGallery.inviteGuest('Peter', 'Middle');

artGallery.buyArticle('picture', 'Mona Liza', 'John');

artGallery.buyArticle('item', 'Ancient vase', 'Peter');

console.log(artGallery.showGalleryInfo('article'));

console.log(artGallery.showGalleryInfo('guest')); 