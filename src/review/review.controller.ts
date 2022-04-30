import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReviewCreateDTO } from '../dtos/review/review-create.dto';
import { ReviewUpdateDTO } from '../dtos/review/review-update.dto';
import { ReviewDTO } from '../dtos/review/review.dto';
import { ReviewDocument } from './review.schema';
import { ReviewService } from './review.service';

@ApiTags('review')
@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {
  }

  /**
   * Get review by id
   */
  @Get(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReviewDTO,
  })
  async getById(@Param('id') id: string): Promise<ReviewDocument> {
    const review = await this.reviewService.findById(id);
    if (!review) throw new NotFoundException(`Review not found`);
    return await this.reviewService.findById(id);
  }

  /**
   * Get all reviews
   */
  @Get()
  @ApiOkResponse({
    type: ReviewDTO,
  })
  async getAll(): Promise<ReviewDocument[]> {
    return await this.reviewService.find({});
  }

  /**
   * Create new review
   */
  @Post()
  @ApiCreatedResponse({
    type: ReviewDTO,
  })
  async create(@Body() payload: ReviewCreateDTO) {
    return await this.reviewService.create(payload);
  }

  /**
   * Update review
   */
  @Patch(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReviewDTO,
  })
  async update(@Param('id') id: string, @Body() payload: ReviewUpdateDTO) {
    const review = await this.reviewService.findById(id);
    if (!review) throw new NotFoundException(`Review not found`);
    Object.assign(review, payload);
    return await review.save();
  }

  /**
   * Delete review
   */
  @Delete(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReviewDTO,
  })
  async delete(@Param('id') id: string) {
    const review = await this.reviewService.findById(id);
    if (!review) throw new NotFoundException(`Review not found`);
    return await review.remove();
  }
}
