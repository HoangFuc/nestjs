import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restaurant } from "src/restaurants/schemas/restaurant.schema";

export type LikeDocument = HydratedDocument<Like>

@Schema({ timestamps: true })
export class Like {
    @Prop()
    id: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
    restaurant: mongoose.Schema.Types.ObjectId
}

export const LikeSchema = SchemaFactory.createForClass(Like)