import { TrainersService } from "./trainers.service";
import { Trainer } from "./trainers.entity";
import { CreateTrainerDto } from "./dto/create-trainer.dto";
export declare class TrainersController {
    private readonly trainersService;
    constructor(trainersService: TrainersService);
    findAll(): Promise<Trainer[]>;
    findOne(id: string): void;
    update(id: string, updateTrainer: Trainer): Promise<Trainer>;
    create(createTrainer: CreateTrainerDto): Promise<Trainer>;
    remove(id: string): void;
}
