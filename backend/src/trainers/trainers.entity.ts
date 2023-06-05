import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { Client } from "src/client/client.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToMany,JoinTable } from "typeorm";

@Entity('trainers')
export class Trainer{
   @PrimaryGeneratedColumn()
   id: number;

   @IsNotEmpty({message: 'Заполните поле fullName'})
   @IsString({message: 'Имя должно быть строкой'})
   @MinLength(5, {message: 'Минимальная длина имени - 5'})
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО", type: String, minLength: 5})
   @Column({})
   fullName: string;


   @IsNotEmpty({message: 'Заполните поле profile'})
   @ApiProperty({example: 'Бодибилдинг', description: 'Специализация', type: String})
   @Column()
   profile: string;

   @IsNotEmpty({message: 'Заполните поле experience'})
   @IsInt({message: 'Поле experience должно быть числом'})
   @Min(0)
   @ApiProperty({example: '4', description: "Стаж работы", type: Number, minimum: 0})
   @Column()
   experience: number;

   @ManyToMany(() => Client, (client) => client.trainers, {onDelete: "CASCADE"})
   clients: Client[];   
}