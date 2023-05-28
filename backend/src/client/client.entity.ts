import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client{
   @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
   @PrimaryGeneratedColumn()
   id: number;

   @IsNotEmpty({message: 'Имя не должно быть пустым'})
   @IsString({message: 'Имя должно быть строкой'})
   @MinLength(5, {message: 'Минимальная длина имени - 5'})
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   @Column({})
   fullName: string;

   @IsNumber()
   @IsNotEmpty()
   @ApiProperty({example: '23', description: "Возраст"})
   @Column({})
   age: number;

   @ManyToMany(() => Trainer, (trainer) => trainer.clients)
   @JoinTable({
      name: 'client_trainer',
      joinColumn: {name :'client_id'},
      inverseJoinColumn: { name: 'trainer_id'}
   })
   trainers: Trainer[]

   @ManyToMany(() => Subscribe, (subscribe) => subscribe.clients)
   @JoinTable({
      name: 'client_subscribe',
      joinColumn: { name: 'client_id'},
      inverseJoinColumn: { name: 'subscribe_id'}
   })
   subscribes: Subscribe[];

}