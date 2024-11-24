import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';
import { User } from './user.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.responses)
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.responses)
  quiz: Quiz;

  @Column('jsonb')
  answers: { questionId: string; answer: string }[];

  @Column()
  score: number;

  @CreateDateColumn()
  submittedAt: Date;
}
