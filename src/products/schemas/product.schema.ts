import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema({
    timestamps:true
})
export class Product{
    @Prop()
    category: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    currency: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// ProductSchema.statics.findAllByCategory = async function(category: string): Promise<Product[]> {
//     return this.find({ category: category }).exec();
// }