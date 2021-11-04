exports.index = function(req, res) {
    const books = [{"name" : "book"}, {"name" : "book 2"}];
    res.json(books);
};
