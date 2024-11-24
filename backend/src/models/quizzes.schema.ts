import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Module } from './module.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb') // JSON format to store an array of question objects
  questions: { questionText: string; options: string[]; correctAnswer: string }[];

  @ManyToOne(() => Module, (module) => module.quizzes)
  module: Module;

  @CreateDateColumn()
  createdAt: Date;
}
