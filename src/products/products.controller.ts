import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOperation, ApiBody, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/input/create.product.dto';
import { CreateProductResponseDto } from './dtos/output/create.product.response.dto';
import { createGenericResponse } from 'src/utils/create.generic.response.utils';
import { GenericResponse } from 'src/shared/dtos/response.dto';
import { CurrentUserGuard } from 'src/shared/guards/current-user.guard';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';

@ApiBearerAuth()
@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @UseGuards(CurrentUserGuard)
    @ApiOperation({
        summary: 'Create product'
    })
    @ApiBody({ type: CreateProductDto })
    @ApiOkResponse({ type: CreateProductResponseDto })
    @Post()
    async create(@Body() createProductRequest: CreateProductDto, @CurrentUser() currentUser): Promise<GenericResponse> {
        const product = await this.productsService.create(createProductRequest, currentUser);
        return createGenericResponse(product);
    }

    @UseGuards(CurrentUserGuard)
    @ApiOperation({
        summary: 'Find all products'
    })
    @ApiOkResponse({ type: [CreateProductResponseDto] })
    @Get()
    async findAll(): Promise<GenericResponse> {
        const products = await this.productsService.find();
        return createGenericResponse(products);
    }

    @UseGuards(CurrentUserGuard)
    @ApiOperation({
        summary: 'Find one product'
    })
    @ApiOkResponse({ type: CreateProductResponseDto })
    @Get('/:id')
    async findOne(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: string): Promise<GenericResponse> {
        const product = await this.productsService.findOne(id);
        return createGenericResponse(product);
    }

    @UseGuards(CurrentUserGuard)
    @ApiOperation({
        summary: 'Delete product'
    })
    @Delete('/:id')
    async delete(
        @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: string,
        @CurrentUser() currentUser
    ): Promise<GenericResponse> {
        await this.productsService.delete(id, currentUser);
        return createGenericResponse(true);
    }
}
