const BookModel = require('../models/Book');

exports.index = async (req, res)=> {
    let books = await BookModel.find({});

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
