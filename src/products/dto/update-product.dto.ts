import { IsNotEmpty, IsString, IsNumber, IsOptional} from "class-validator";
export class updateProductDto{
   
    @IsOptional()
    @IsString()
    readonly category:string; 
    @IsOptional()
    @IsString()
    readonly title:string;
    @IsOptional()
    @IsString()
    readonly description:string;
    @IsOptional()
    @IsNumber()
    readonly quantity:number;
    @IsOptional()
    @IsNumber()
    readonly price:number;
    @IsOptional()
    @IsString()
    readonly currency:string;

}
