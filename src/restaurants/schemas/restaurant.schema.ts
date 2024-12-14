import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RestaurantDocument = HydratedDocument<Restaurant>

@Schema({ timestamps: true })
export class Restaurant { 
    @Prop()
    id: number

    @Prop()
    name: string

    @Prop()
    address: string

    @Prop()
    phone: string

    @Prop()
    email: string

    @Prop()
    rating: number
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)

