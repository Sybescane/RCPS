import { ApiProperty } from "@nestjs/swagger";
import { Client } from "src/client/client.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('subscribe')
export class Subscribe{
   @PrimaryGeneratedColumn()
   @ApiProperty({example: '1', description: "Уникальный идентификатор"})
   id: number;

   @ApiProperty({example: 'Тренажерный зал', description: 'Название абонемента'}) 
   @Column()
   name: string;

   @ApiProperty({example: 'Абонемент включает в себя...', description: "Описание абонемента"})
   @Column()
   discription: string;

   @ApiProperty({example: '10000', description: "Стоимость абонемента"})
   @Column()
   cost: number;

   @ManyToMany((type) => Client, (client) => client.subscribes)
   @JoinTable({
      name: 'client_subscribe',
      joinColumn: {name: 'subscribe_id'},
      inverseJoinColumn: {name: 'client_id'}
   })
   clients: Client[]
}