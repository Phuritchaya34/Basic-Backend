exports.get = (req,res) => {
    res.send('Get customers');
}

exports.getById = (req,res) => {
    res.send("Customer id = " + req.params.id);
}

exports.getbyname = (req,res) => {
    res.send("Customer name = " + req.params.name);
}

exports.create = (req,res) => {
    res.send("Create customer ");
}

exports.puts = (req,res) => {
    res.send("Puts customer  " + req.params.id);
}

exports.patchs = (req,res) => {
    res.send("Patchs customers" + req.params.id);
}

exports.delete = (req,res) => {
    res.send("Delete customer " + req.params.id);
}