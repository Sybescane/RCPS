import { Trainer } from "../trainers.entity";
declare const CreateTrainerDto_base: import("@nestjs/common").Type<Pick<Trainer, "fullName" | "profile" | "experience">>;
export declare class CreateTrainerDto extends CreateTrainerDto_base {
    clients: string[];
}
export {};
