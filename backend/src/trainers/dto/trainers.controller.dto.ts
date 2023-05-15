import { Controller, Get } from "@nestjs/common";
import { TrainersService } from '../trainers.service';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('trainer')
@ApiTags('Тренеры DTO')
export class TrainerDtoController{
   constructor(private readonly trainersService: TrainersService){}

   @ApiOperation({summary: 'Поиск неавторизованных тренеров'})
   @Get('incomplete')
   findIncomplete(){
      this.trainersService.findIncomplete();
   }
}