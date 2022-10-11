module.exports.getAllParts = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    console.log(ip, query, params, body, headers);
    res.send("Parts Found");
}

module.exports.getAParts = (req, res) => {
    res.send("A Part Found with id");
}