import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  start: Date;

  @Column({ type: 'datetime' })
  end: string;

  @ManyToOne((_type) => Event, (event) => event.workshops, { eager: false })
  @JoinColumn({ name: 'eventId' })
  @Column({ type: 'integer', default: null })
  eventId: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;
}
