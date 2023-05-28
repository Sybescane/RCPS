import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { Client } from "src/client/client.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('subscribe')
export class Subscribe{
   @PrimaryGeneratedColumn()
   @ApiProperty({example: '1', description: "Уникальный идентификатор"})
   id: number;

   @IsNotEmpty({message: 'Заполните поле name'})
   @IsString({message: 'Name должно быть строкой'})
   @ApiProperty({example: 'Тренажерный зал', description: 'Название абонемента'}) 
   @Column()
   name: string;

   @IsNotEmpty({message: 'Заполните поле description'})
   @IsString({message: 'Description должно быть строкой'})
   @ApiProperty({example: 'Абонемент включает в себя...', description: "Описание абонемента"})
   @Column()
   description: string;

   @IsInt({message: 'Поле experience должно быть числом'})
   @Min(0)
   @IsNotEmpty({message: 'Заполните поле cost'})
   @ApiProperty({example: '10000', description: "Стоимость абонемента"})
   @Column()
   cost: number;

   @ManyToMany(() => Client, (client) => client.subscribes)
   clients: Client[]
}