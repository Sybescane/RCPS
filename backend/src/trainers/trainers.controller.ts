import { TrainersService } from "./trainers.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Trainer } from "./trainers.entity";
import { CreateTrainerDto } from "./dto/create-trainer.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('trainers')
@ApiTags('Тренеры')
export class TrainersController{
   constructor(private readonly trainersService: TrainersService){}

   @ApiOperation({summary: 'Поиск всех тренеров'})
   @Get()
   findAll() {
      return this.trainersService.findAll();
   }

   @ApiOperation({summary: 'Поиск неавторизованных тренеров'})
   @Get('incomplete')
   findIncomplete(){
      return this.trainersService.findIncomplete();
   }

   @ApiOperation({summary: 'Поиск конкретного тренера'})
   @Get(':id')
   findOne(@Param('id') id: string){
      return this.trainersService.findOne(+id);
   }

   @ApiOperation({summary: 'Изменение тренера'})
   @Put(':id')
   update(@Param('id') id: string, @Body() updateTrainer: Trainer){
      return this.trainersService.update(+id, updateTrainer)
   }

   @ApiOperation({summary: 'Создание нового тренера'})
   @Post()
   create(@Body() createTrainer: CreateTrainerDto){
      return this.trainersService.create(createTrainer);
   }

   @ApiOperation({summary: 'Удаление тренера'})
   @Delete(':id')
   remove(@Param('id') id: string){
      return this.trainersService.remove(+id);
   }
}