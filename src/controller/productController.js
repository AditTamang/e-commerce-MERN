import productService from "../services/productService.js"


const createProduct = async (req, res) => {
    const product = req.body
//     console.log(product)
//    return res.send(product)

    try {
        if (!product) {
            return res.status(400).send("Product required")
        }

        if (!product.price && !product.productName) {
            return res.status(400).send("Product field is required")
        }

        const data = await productService.createProduct(product);

        res.status(200).json({
            message: "product created successful",
            data
        })
    } catch (error) {
        console.log(error.message);
        res.status(200).send("error occured to create product.")
    }
}

export default { createProduct }