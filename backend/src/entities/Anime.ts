import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("anime")
export class Anime {
  @PrimaryColumn()
  id: number;

  @Column({ type: "integer" })
  genre_id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  synopsis: string;

  @Column({ type: "text", nullable: true })
  thumbnail: string | undefined;

  @Column({ type: "text" })
  aired: string;

  @Column({ type: "text" })
  eps: string;

  @Column({ type: "text" })
  type: string;
}
