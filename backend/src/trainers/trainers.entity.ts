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
   fullName: string;

   @ApiProperty({example: 'Бодибилдинг', description: "Специализация"})
   @Column()
   profile: string;

   @ApiProperty({example: '4', description: "Стаж работы"})
   @Column()
   experience: number;

   @ManyToMany(() => Client, (client) => client.trainers)
   clients: Client[];   
}