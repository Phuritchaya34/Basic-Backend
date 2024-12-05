
exports.get = (req, res)=>{
    res.send("Get a product");
}

exports.getById = (req, res)=>{
    res.send("Get products " + req.params.id);
}

exports.create = (req, res)=>{
    res.send("Create products ");
}