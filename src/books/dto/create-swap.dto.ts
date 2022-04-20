import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
export class createSwapDto {
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
  @IsString()
  //   @IsNotEmpty()
  public readonly file: string;
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
