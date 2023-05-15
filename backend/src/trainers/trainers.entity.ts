import { ApiProperty } from "@nestjs/swagger";
import { Client } from "src/client/client.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToMany,JoinTable } from "typeorm";

@Entity('trainers')
export class Trainer{
   @PrimaryGeneratedColumn()
   @ApiProperty({example: '1', description: "Уникальный идентификатор"})
   id: number;

   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО"})
   @Column()
   fullname: string;

   @ApiProperty({example: 'Бодибилдинг', description: "Специализация"})
   @Column()
   profile: string;

   @ApiProperty({example: '4', description: "Стаж работы"})
   @Column()
   experience: number;

   @ManyToMany((type) => Client, (client) => client.trainers)

   @JoinTable({
      name: 'client_trainer',
      joinColumn: { name: 'trainer_id'},
      inverseJoinColumn: { name: 'client_id'}
   })
   clients: Client[];   
}