$('.share-this').each(function(i, elem) {
    $(elem).simpleSocialShare({
        url: 'https://saung-rangon.github.io'+ elem.dataset.url,
        shareType: 'button'
    })
})
