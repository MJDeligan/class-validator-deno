import "https://esm.sh/reflect-metadata";
import { IsString, validate } from "./src/index.ts";
import { plainToClass, Expose } from "https://esm.sh/class-transformer";

class SomeDto {
  @IsString()
  @Expose()
  name?: string;

  @IsString()
  @Expose()
  value?: string;
}

const instance = plainToClass(SomeDto, {
  name: "something",
  value: 1234,
});

const errors = await validate(instance, {});

console.log(errors);
