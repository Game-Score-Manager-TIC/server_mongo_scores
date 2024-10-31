import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresResolver } from './scores.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './score.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Score.name, schema: ScoreSchema }]),
  ],
  providers: [ScoresResolver, ScoresService],
})
export class ScoresModule {}
