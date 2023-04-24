import { IsNotEmpty, IsString, IsNumber} from "class-validator";

export class createProductDto{

    @IsNotEmpty()
    @IsString()
    readonly category:string; 
    @IsNotEmpty()
    @IsString()
    readonly title:string;
    @IsNotEmpty()
    @IsString()
    readonly description:string;
    @IsNotEmpty()
    @IsNumber()
    readonly quantity:number;
    @IsNotEmpty()
    @IsNumber()
    readonly price:number;
    @IsNotEmpty()
    @IsString()
    readonly currency:string;

}
