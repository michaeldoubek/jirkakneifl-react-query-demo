import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

export class PostResponse extends PostDto {
  @ApiProperty()
  id: number;
}
