const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "I am get all products" });
};



const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getting all testing products." });
}

module.exports ={getAllProducts, getAllProductsTesting};