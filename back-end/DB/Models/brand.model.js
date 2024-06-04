import { Schema, model } from 'mongoose'
import { systemRoles } from '../../src/Utils/systemRoles.js'

const brandSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            //required: true,
        },
        logo: {
            secure_url: {
                type: String,
                // required: true,
            },
            public_id: {
                type: String,
                // required: true,
            },
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }, role: {
            type: String,
            default: systemRoles.USER,

        },
        password: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            default: 0,
        },
        // updatedBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        // },
        // subCategoryId: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'subCategory',
        //     // required: true,
        // },
        // categoryId: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Category',
        //     // required: true,
        // }

        // customId: String,
        token: String,
        forgetCode: String,

    },
    {
        toObject: { virtuals: true }, // for res.json()
        toJSON: { virtuals: true },
        timestamps: true,
    },
)

// brandSchema.virtual('products', {
//     ref: 'Product',
//     foreignField: 'brandId',
//     localField: '_id',
//     // justOne: true,
// })
const brandModel = model('Brand', brandSchema)
// new brandModel({
//     email:"abdo@gmail.com",
//     password:"123",

// }).save()
// new brandModel({
//     email:"abdoo@gmail.com",
//     password:"123",
//     role:"user",
    

// }).save()

export {brandModel}