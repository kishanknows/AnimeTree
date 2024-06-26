import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("news")
export class News {
  @PrimaryColumn()
  id: string;

  @Column({ type: "text" })
  headline: string;

  @Column({ type: "text", nullable: true })
  url: string | undefined;

  @Column({ type: "text", nullable: true })
  thumbnail: string | undefined;

  @Column({ type: "text" })
  time_posted: string;

  @Column({ type: "text" })
  hook: string;

  @Column({ type: "text" })
  full: string;
}
