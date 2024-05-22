const Data = require('../models/Task');

exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.json(newData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};