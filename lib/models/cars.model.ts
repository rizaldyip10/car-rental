import { Schema, Types, model, models } from "mongoose";

const CarsSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    specification: {
        gearBox: {
            type: String,
            required: true
        },
        fuel: {
            type: String,
            required: true,
        },
        doors: {
            type: Number,
            required: true,
        },
        airCon: {
            type: Boolean,
            required: true,
        },
        seats: {
            type: Number,
            required: true,
        },
        distance: {
            type: Number,
            required: true,
        }
    }
});

const Cars = models?.Cars || model("Cars", CarsSchema);

export default Cars;