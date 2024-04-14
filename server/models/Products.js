const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        barcod: {
            type: String,
            required: true,
            //after building!
            // unique: true
        },
        name: {
            type: String,
            required: true
        },
        image:{
            type: String,
            // required: true
        },
        // itemDescription: {
        //     type: [String,{ length: Number, width: Number, height: Number }],
        // },
        itemDescription:{
            type: String,
        },
        company: {
            type: String
        },
        category: {
            type: String,
            required: true
        },
        size: {
            type: String
        },
        amount:{
            type:Number,
            required:true
        },
        // size: {
        //     type:[
        //         {length:{
        //             type:Number
        //         }},
        //        { width:{
        //             type:Number
        //         }},
        //         { height:{
        //             type:Number
        //         }},
        //     ]

        // },
        colors: {
            type: [String]
        },
        agent: {
            type: String
        },
        //לבדוק האם מספר מגביל לשלם
        agentPrice: {
            type: Number
        },
        sellingPrice: {
            type: Number
        },
        salePrice: {
            type: Number
        },
        inSale: {
            type: Boolean,
            default: false
        },
        //for marking amount....
        marked: {
            type: Boolean,
            default:false
        },
        searchDetails: {
            type:String,
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model('product', productSchema)


