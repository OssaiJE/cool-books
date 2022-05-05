import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
export class CreateSwapDto {
  @IsString()
  @IsNotEmpty()
  public readonly userid: string;
  @IsString()
  @IsNotEmpty()
  public readonly title: string;
  @IsString()
  @IsNotEmpty()
  public readonly author: string;
  @IsString()
  @IsNotEmpty()
  public readonly shortdesc: string;
  @IsNotEmpty()
  public readonly image: any;
  @IsString()
  @IsNotEmpty()
  public readonly typetag: string;
  @IsString()
  @IsNotEmpty()
  public readonly lookingfor: string;
  @IsDateString()
  @IsNotEmpty()
  public readonly createdDate: Date;
}
