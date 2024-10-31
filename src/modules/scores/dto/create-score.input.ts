// src/modules/scores/dto/create-score.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateScoreInput {
  @Field({ description: 'UserId (UUID)' })
  userId: string;

  @Field({ description: 'Name for the game' })
  game: string;

  @Field({ description: 'Score for the game' })
  score: number; // Cambié el tipo a `number` asumiendo que el puntaje es un número
}
