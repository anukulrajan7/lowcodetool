import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ConnectionCreateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  requesterId?: string

  @IsString()
  @IsOptional()
  receiverId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class ConnectionUpdateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  requesterId?: string

  @IsString()
  @IsOptional()
  receiverId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
