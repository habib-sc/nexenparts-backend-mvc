let views = 0;

const viewCount = (req, res, next) => {
    views++;
    console.log("views: " + views);

    next();
}

module.exports = viewCount;