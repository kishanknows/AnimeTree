import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "watchlist" })
export class Watchlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("uuid", { nullable: false })
  user_id: string;

  @Column({ nullable: false, type: "integer" })
  anime_id: number;

  @Column()
  thumbnail: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
