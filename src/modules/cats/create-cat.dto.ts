import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsString()
  @IsOptional()
  readonly breed?: string;
}
