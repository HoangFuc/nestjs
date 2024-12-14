import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restaurant } from "src/restaurants/schemas/restaurant.schema";
import { User } from "src/users/schemas/user.schema";

export type ReviewDocument = HydratedDocument<Review>

@Schema({ timestamps: true })
export class Review {
    @Prop()
    id: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
    restaurant: mongoose.Schema.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId

    @Prop()
    rating: number

    @Prop()
    comment: string

    @Prop()
    image: string

    @Prop()
    created_at: string
}

export const ReviewSchema = SchemaFactory.createForClass(Review)