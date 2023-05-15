import { Controller, Get } from "@nestjs/common";
import { ClientService } from "../client.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('client')
@ApiTags('Клиенты DTO')
export class ClientDtoController{
   constructor(private readonly clientService: ClientService){}
   @ApiOperation({summary: 'Поиск неавторизованных пользователей'})
   @Get('incomplete')
   findIncomplete(){
      this.clientService.findIncomplete();
   }
}