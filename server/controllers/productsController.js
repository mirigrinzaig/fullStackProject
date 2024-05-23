const Products = require("../models/Products")

//create
//require admin!
const createNewProduct = async (req, res) => {
    const image=(req.file?.filename?req.file.filename:"")
    const { barcod, name, itemDescription, company, category, size, amount, colors,
        agent, agentPrice, sellingPrice, salePrice, inSale, marked } = req.body
        //validation of the requiered fields
    if (!barcod || !name || !category) {
        return res.status(400).json({ error: "חסרים נתונים"});
    }
    //validation of a unique barcod
    const products = await Products.find().lean()
    const productExists = products.find((p) => p.barcod === barcod)
    if (productExists) {
        return res.status(409).json({ error: "קיים מוצר עם ברקוד זהה" });
    }
    //create array of colors:
    let colorsImg = []
    if (colors) {
        colorsImg = colors.split(",")}
    //create search datails:
    let searchDetails = `${name} ${category}`
    if (company) {
        searchDetails = `${searchDetails} ${company}`
    }
    if (colors) {
        searchDetails = `${searchDetails} ${colors}`
    }
    if(category){
        searchDetails += category
    }
    if(itemDescription){
        searchDetails+=itemDescription
    }
    //create product:
    //לזכור להוסיף בהמשך עדכון תמונה.!!!!
    const product = await Products.create({
        barcod, name, itemDescription, company, category, size, amount, colors:colorsImg,image,
        agent, agentPrice, sellingPrice, salePrice, inSale, marked, searchDetails
    })
    return res.json(product)

}
//read
//for every one!
const getAllProducts = async (req, res) => {
    //יש כאן פרטים שהמשתמש לא רואה אבל צריך אותם בצד לקוח עבור כולם, כמו פרטי חיפוש או כמות עבור הצגת אזל
    const products = await Products.find({}, {name: 1,barcod:1,company:1,amount:1,category:1,image:1,colors:1,sellingPrice:1,salePrice:1,inSale:1,marked:1,searchDetails:1,itemDescription:1}).lean()
    if (!products?.length) {
    return res.status(400).json({ massage: 'שגיאה בקבלת נתונים' })
    }
    return res.json(products)
}
//read
//for Admin! more details for every product.
const getAllProductsForAdmin = async (req, res) => {
    const products = await Products.find().lean()
    if (!products?.length) {
    return res.status(400).json({ massage: 'שגיאה בקבלת הנתונים' })
    }
    return res.json(products)
}

//update
//for admin!
const updateProduct = async (req, res) => {
    const image=(req.file?.filename?req.file.filename:"")
    const { barcod, name, itemDescription, company, category, clothSize, amount, colors,
        agent, agentPrice, sellingPrice, salePrice, inSale, marked } = req.body
    //validation of the requiered fields
    if (!barcod) {
        return res.status(400).json({ error: "Missing id (barcod)"});
    }
    const product = await Products.findOne({barcod:barcod}).exec()
    if (!product) {
        return res.status(400).json({ message: "product not found" })
    }

    //validation of a unique barcod if barcod has changed.
    // const products = await Products.find().lean()
    // const productExists = products.find((p) => p.barcod === barcod)
    // if (productExists) {
    //    return res.json('׳‘׳¨׳§׳•׳“ ׳”׳׳•׳¦׳¨ ׳§׳™׳™׳, ׳™׳© ׳׳”׳›׳ ׳™׳¡ ׳‘׳¨׳§׳•׳“ ׳™׳™׳—׳•׳“׳™.')
    // }
    // ׳›׳ "׳  ׳”׳׳ ׳¨׳׳•׳•׳ ׳˜׳™? ׳׳₪׳©׳¨ ׳׳¢׳“׳›׳ ׳¨׳§ ׳—׳׳§ ׳׳”׳©׳“׳•׳×
    // if (!barcod || !name || !category) {
    //     return res.json('.׳—׳•׳‘׳” ׳׳׳׳ ׳‘׳¨׳§׳•׳“, ׳©׳ ׳•׳§׳˜׳’׳•׳¨׳™׳”')
    // }

    
    //׳׳¢׳¨׳ ׳”׳§׳™׳©׳•׳¨׳™׳ ׳׳¦׳‘׳¢׳™׳ ׳׳×׳¦׳•׳’׳”
 
    // let colorsImg = []
    // if (colors) {
    //     colorsImg = colors.split(" ")
    // }

    //create search if it was change:
    let searchDetails = `${name} ${category}`
    if (company) {
        searchDetails = `${searchDetails} ${company}`
    }
    if (colors) {
        searchDetails = `${searchDetails} ${colors}`
    }

    product.barcod = barcod
    product.name = name
    product.itemDescription = itemDescription
    product.company = company
    product.category = category
    product.clothSize = clothSize
    product.amount = amount
    product.colors = colors
    // product.colors = colorsImg
    //product.image = image
    product.agent = agent
    product.agentPrice = agentPrice
    product.sellingPrice = sellingPrice
    product.salePrice = salePrice
    product.inSale = inSale
    product.marked = marked
    product.searchDetails = searchDetails
    if(image){
        product.image=image
    }

    const updateProduct = await product.save()
     res.json(`product: ${updateProduct.name} updated`) 

}

//delete
//for admin!
const deleateProduct = async (req, res) => {
    const {barcod} = req.body
    console.log(barcod);
    if(!barcod){
        return res.status(400).json({ error: "Missing barcod"});
    }
    const product = await Products.findOne({barcod:barcod}).exec()
    // const {barcod} = req.body
    // const product = await Products.find((p)=>p.barcod === barcod).exec()
    if (!product) {
        return res.json({ message: 'product not found' })
    }
    else {
        const result = await product.deleteOne()
        const replay = `Product ${result.name}, barcod ${result.barcod} deleted`
        return res.json(replay) 
    }

}
//for every one- less datails
const getProductById = async (req, res) => {
    const { barcod } = req.params
    const product = await Products.findOne({barcod:barcod}).lean()
    if (!product) {
        return res.json({ message: `no product with barcod: ${barcod}` })
    }
    let newProduct={
        name: product.name,
        barcod:product.barcod,
        company:product.company,
        category:product.category,
        amount:product.amount,
        image:product.image,
        colors:product.colors,
        sellingPrice:product.sellingPrice,
        salePrice:product.salePrice,
        itemDescription:product.itemDescription,
        inSale:product.inSale,
        marked:product.marked,
        searchDetails:product.searchDetails}
    
    return res.json(newProduct)

}
//for admin- all datails.
const getProductByIdForAdmin = async (req, res) => {
    const { barcod } = req.params
    const product = await Products.findOne({barcod:barcod}).lean()
    if (!product) {
        return res.json({ message: 'Product not found' })
    }
    return res.json(product)
}

module.exports = { createNewProduct, getAllProducts,getAllProductsForAdmin, updateProduct, deleateProduct, getProductById ,getProductByIdForAdmin}

