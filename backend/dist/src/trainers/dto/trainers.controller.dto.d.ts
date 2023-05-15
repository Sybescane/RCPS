import { TrainersService } from '../trainers.service';
export declare class TrainerDtoController {
    private readonly trainersService;
    constructor(trainersService: TrainersService);
    findIncomplete(): void;
}
