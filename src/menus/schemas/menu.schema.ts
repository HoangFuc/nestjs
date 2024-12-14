import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Restaurant } from "src/restaurants/schemas/restaurant.schema";

export type MenuDocument = HydratedDocument<Menu>

@Schema({ timestamps: true })
export class Menu {
    @Prop()
    id: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name })
    restaurant: mongoose.Schema.Types.ObjectId

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    image: string
}

export const MenuSchema = SchemaFactory.createForClass(Menu)
