const articledata = require('../data/articles.json')
const controller = {
    homePage : (req, res) => {
        res.render('pages/index', {articledata})
    },
    articlePage : (req, res) => {
        const idParams = parseInt(req.params.idParams);    
        if (idParams > articledata.length || idParams < 1 ) {
            res.render('pages/404')
        } else {
            const article = articledata.find(articledata => articledata.id === idParams)
            console.log('articleID--------', article);
            res.render('pages/article', {article})
        }
    }
}

module.exports = controller;