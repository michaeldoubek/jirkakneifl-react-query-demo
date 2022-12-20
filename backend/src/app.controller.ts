import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto, PostResponse } from './post.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Posts found',
    type: [PostResponse],
  })
  listPosts(): PostResponse[] {
    return this.appService.listPosts();
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Post found', type: PostResponse })
  getPost(@Param('id') id: string): PostResponse {
    return this.appService.getPost(Number(id));
  }

  @Post()
  createPost(@Body() post: PostDto): PostResponse {
    return this.appService.createPost(post);
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Post successfully updated',
    type: PostResponse,
  })
  updatePost(@Param('id') id: string, @Body() post: PostDto): PostResponse {
    return this.appService.updatePost(Number(id), post);
  }

  @Delete('/:id')
  @ApiResponse({ status: 204, description: 'Post successfully deleted' })
  @HttpCode(204)
  deletePost(@Param('id') id: string): void {
    this.appService.deletePost(Number(id));
  }
}
