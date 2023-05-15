import { Trainer } from './trainers.entity';
import { Repository } from 'typeorm';
import { Client } from 'src/client/client.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { IncompleteTrainerDto } from './dto/incomplete-trainer.dto';
export declare class TrainersService {
    private readonly trainerRepository;
    private readonly clientRepository;
    constructor(trainerRepository: Repository<Trainer>, clientRepository: Repository<Client>);
    create(trainerDto: CreateTrainerDto): Promise<Trainer>;
    findOne(id: number): Promise<Trainer>;
    findAll(): Promise<Trainer[]>;
    update(id: number, updatedTrainer: Trainer): Promise<Trainer>;
    remove(id: number): void;
    findIncomplete(): Promise<IncompleteTrainerDto[]>;
}
