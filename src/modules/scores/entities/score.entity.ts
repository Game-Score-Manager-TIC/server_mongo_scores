import { ObjectType, Field, Float } from '@nestjs/graphql'; // Cambia Int a Float
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@ObjectType() // Asegúrate de que esta línea esté presente
@Schema()
export class Score extends Document {
  @Field() // Asegúrate de decorar todos los campos
  @Prop({ type: String, default: uuidv4 })
  scoreId: string;

  @Field({ nullable: true }) // Decorador para el campo `userId`
  @Prop({ type: String, default: uuidv4 })
  userId: string;

  @Field() // Decorador para el campo `game`
  @Prop({ type: String, required: true })
  game: string;

  @Field(() => Float) // Cambia esto de Int a Float
  @Prop({ type: Number, required: true })
  score: number; // Se mantiene como number

  @Field({ nullable: true }) // Decorador para el campo `date`
  @Prop({type: Date })
  createdAt: Date;

  @Field({ nullable: true }) // Decorador para el campo `date`
  @Prop({type: Date})
  updatedAt: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
