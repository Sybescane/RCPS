import { SubscribesService } from "./subscribe.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Subscribe } from "./subscribe.entity";
import { CreateSubscribeDto } from "./dto/create-subscribe.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('subscribes')
@ApiTags('Абонементы')
export class SubscribesController{
   constructor(private readonly subscribesService: SubscribesService){}

   @ApiOperation({summary: 'Поиск всех абонементов'})
   @Get()
   findAll(){
      return this.subscribesService.findAll();
   }

   @ApiOperation({summary: 'Поиск конкретного абонемента'})
   @Get(':id')
   findOne(@Param('id') id: string){
      this.subscribesService.findOne(+id);
   }

   @ApiOperation({summary: 'Изменение абонемента'})
   @Put(':id')
   update(@Param('id') id: string, @Body() updateSubscribe: Subscribe){
      return this.subscribesService.update(+id, updateSubscribe)
   }

   @ApiOperation({summary: 'Создание абонемента'})
   @Post()
   create(@Body() createSubscribe: CreateSubscribeDto){
      return this.subscribesService.create(createSubscribe);
   }

   @ApiOperation({summary: 'Удаление абонемента'})
   @Delete(':id')
   remove(@Param('id') id: string){
      return this.subscribesService.remove(+id);
   }
}