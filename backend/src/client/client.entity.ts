import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from "class-validator";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity('clients')
@Unique(['email'])
export class Client{
   @PrimaryGeneratedColumn()
   id: number

   @IsEmail()
   @IsNotEmpty({message: 'Заполните поле email'})
   @ApiProperty({example: 'mail@mail.ru', description: 'Email'})
   @Column({})
   email: string;

   @IsNotEmpty({message: 'Заполните поле password'})
   @MinLength(8)
   @ApiProperty({example: 'qwerty12345678', description: 'Password', type: String, minLength: 8})
   @Column({})
   password: string;

   @IsNotEmpty({message: 'Заполните поле fullName'})
   @IsString({message: 'Имя должно быть строкой'})
   @MinLength(5, {message: 'Минимальная длина имени - 5'})
   @ApiProperty({example: 'Иванов Иван Иванович', description: "ФИО", type: String, minLength: 5})
   @Column({})
   fullName: string;

   @IsInt({message: 'Поле age должно быть числом'})
   @IsNotEmpty({message: 'Заполните поле age'})
   @Min(12, {message: 'Минимальный возраст - 12'})
   @Max(100, {message: 'Максимальный возраст - 100'})
   @ApiProperty({example: '23', description: "Возраст", minimum: 12, maximum: 100, type: Number})
   @Column({})
   age: number;

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date

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