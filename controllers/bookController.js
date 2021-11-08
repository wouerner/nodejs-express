exports.index = (req, res)=> {
    const books = [{"name" : "book 1"}, {"name" : "book 2"}];
    res.json(books);
};

exports.show = function(req, res) {
    const books = {"name" : "book"};
    res.json(books);
};

exports.store = function(req, res) {
    const books = {"message": "Criado!", "data":{"name" : "book"}};
    res.json(books);
};

exports.update = function(req, res) {
    const books = {"message": "Atualizado!", "data":{"name" : "book"}};
    res.json(books);
};

exports.del = function(req, res) {
    const books = {"message": "Excluido!", "data":{"name" : "book"}};
    res.json(books);
};
