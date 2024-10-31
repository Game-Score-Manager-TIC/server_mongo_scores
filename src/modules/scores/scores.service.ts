import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Score } from './score.schema';
import { CreateScoreInput } from './dto/create-score.input';
import { UpdateScoreInput } from './dto/update-score.input';

@Injectable()
export class ScoresService {
  constructor(@InjectModel(Score.name) private scoreModel: Model<Score>) {}

  async getAllScores(): Promise<Score[]> {
    return this.scoreModel.find().exec();
  }

  async createScore(createScoreDto: CreateScoreInput) {
    const score = new this.scoreModel(createScoreDto);
    return score.save();
  }

  async getScoreById(scoreId: string): Promise<Score> {
    const score = await this.scoreModel
      .findOne({ scoreId: scoreId })
      .select({ scoreId: 1, userId: 1, game: 1, score: 1, createdAt: 1, updatedAt: 1}); 
  
    if (!score) {
      throw new NotFoundException('Score not found');
    }
    return score;
  }

  async updateScore(scoreId: string, updateScoreDto: UpdateScoreInput) {
    const updateScore = await this.scoreModel.updateOne(
      { scoreId: scoreId },
      updateScoreDto,
    );

    if (!updateScore) {
      throw new NotFoundException('Score not found');
    }
    return this.getScoreById(scoreId);
  }

  async deleteScore(scoreId: string): Promise<boolean> {
    const result = await this.scoreModel
      .findOneAndDelete({ scoreId: scoreId })
      .exec();
    if (!result) {
      throw new NotFoundException('Score not found');
    }
    return true;
  }
}
