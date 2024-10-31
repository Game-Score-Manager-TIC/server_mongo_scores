import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ScoresService } from './scores.service';
import { CreateScoreInput } from './dto/create-score.input';
import { UpdateScoreInput } from './dto/update-score.input';
import { Score } from './entities/score.entity';

@Resolver(() => Score)
export class ScoresResolver {
  constructor(private readonly scoresService: ScoresService) {}

  @Mutation(() => Score)
  createScore(@Args('createScoreInput') createScoreInput: CreateScoreInput) {
    return this.scoresService.createScore(createScoreInput);
  }

  @Query(() => [Score])
  getAllScores() {
    return this.scoresService.getAllScores();
  }

  @Query(() => Score, { nullable: true })
  getScoreById(@Args('id') id: string) {
    return this.scoresService.getScoreById(id);
  }

  @Mutation(() => Score)
  updateScore(@Args('updateScoreInput') updateScoreInput: UpdateScoreInput) {
    return this.scoresService.updateScore(
      updateScoreInput.scoreId,
      updateScoreInput,
    );
  }

  @Mutation(() => Boolean)
  deleteScore(@Args('id') id: string) {
    return this.scoresService.deleteScore(id);
  }
}
