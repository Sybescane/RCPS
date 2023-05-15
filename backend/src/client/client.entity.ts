import { ApiProperty } from "@nestjs/swagger";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client{
   @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
   @PrimaryGeneratedColumn()
   id: number;

   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   @Column({})
   fullname: string;

   @ApiProperty({example: '23', description: "Возраст"})
   @Column({})
   age: number;

   @ApiProperty({example: true, description: "существование подписки у пользователя"})
   @Column({})
   isSubscribe: boolean;

   @ManyToMany((type) => Trainer, (trainer) => trainer.clients)

   @JoinTable({
      name: 'client_trainer',
      joinColumn: {name :'client_id'},
      inverseJoinColumn: { name: 'trainer_id'}
   })
   trainers: Trainer[]

   @ManyToMany((type) => Subscribe, (subscribe) => subscribe.clients)

   @JoinTable({
      name: 'client_subsribe',
      joinColumn: { name: 'client_id'},
      inverseJoinColumn: { name: 'subscribe_id'}
   })
   subcribes: Subscribe[];

}