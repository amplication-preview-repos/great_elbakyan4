/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IndustryPartnershipWhereInput } from "./IndustryPartnershipWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IndustryPartnershipOrderByInput } from "./IndustryPartnershipOrderByInput";

@ArgsType()
class IndustryPartnershipFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IndustryPartnershipWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IndustryPartnershipWhereInput, { nullable: true })
  @Type(() => IndustryPartnershipWhereInput)
  where?: IndustryPartnershipWhereInput;

  @ApiProperty({
    required: false,
    type: [IndustryPartnershipOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IndustryPartnershipOrderByInput], { nullable: true })
  @Type(() => IndustryPartnershipOrderByInput)
  orderBy?: Array<IndustryPartnershipOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { IndustryPartnershipFindManyArgs as IndustryPartnershipFindManyArgs };
