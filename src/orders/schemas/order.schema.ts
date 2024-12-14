import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restaurant } from "src/restaurants/schemas/restaurant.schema";
import { User } from "src/users/schemas/user.schema";

export type OrderDocument = HydratedDocument<Order>

@Schema({ timestamps: true })
export class Order {
    @Prop()
    id: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
    restaurant: mongoose.Schema.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId

    @Prop()
    totalPrice: number

    @Prop()
    status: string

    @Prop()
    orderTime: string

    @Prop()
    deliveryTime: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)
