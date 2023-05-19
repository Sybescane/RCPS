import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client{
   @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
   @PrimaryGeneratedColumn()
   id: number;

   @IsNotEmpty()
   @IsString()
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   @Column({})
   fullName: string;

   @IsNumber()
   @IsNotEmpty()
   @ApiProperty({example: '23', description: "Возраст"})
   @Column({})
   age: number;


   // @ApiProperty({example: true, description: "существование подписки у пользователя"})
   // @Column({})
   // isSubscribe: boolean;

   @ManyToMany((type) => Trainer, (trainer) => trainer.clients)
   @JoinTable({
      name: 'client_trainer',
      joinColumn: {name :'client_id'},
      inverseJoinColumn: { name: 'trainer_id'}
   })
   trainers: Trainer[]

   @ManyToMany((type) => Subscribe, (subscribe) => subscribe.clients)
   @JoinTable({
      name: 'client_subscribe',
      joinColumn: { name: 'client_id'},
      inverseJoinColumn: { name: 'subscribe_id'}
   })
   subscribes: Subscribe[];

}