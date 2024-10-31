import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateScoreInput {
  @Field({ description: 'Score ID (UUID)', nullable: true })
  scoreId?: string;

  @Field({ description: 'Score update' })
  score: number;
}
