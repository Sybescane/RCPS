import { TrainersService } from "./trainers.service";
import { Trainer } from "./trainers.entity";
import { CreateTrainerDto } from "./dto/create-trainer.dto";
export declare class TrainersController {
    private readonly trainersService;
    constructor(trainersService: TrainersService);
    findAll(): Promise<Trainer[]>;
    findIncomplete(): Promise<import("./dto/incomplete-trainer.dto").IncompleteTrainerDto[]>;
    findOne(id: string): Promise<Trainer>;
    update(id: string, updateTrainer: Trainer): Promise<Trainer>;
    create(createTrainer: CreateTrainerDto): Promise<Trainer>;
    remove(id: string): void;
}
