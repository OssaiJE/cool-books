import { IsNotEmpty, IsEmail, IsString, IsDateString } from 'class-validator';
export class createUserDto {
  @IsString()
  @IsNotEmpty()
  public readonly firstame: string;
  @IsString()
  @IsNotEmpty()
  public readonly lastname: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;
  @IsString()
  @IsNotEmpty()
  public readonly passWord: string;
  @IsDateString()
  @IsNotEmpty()
  public readonly createdDate: Date;
}
