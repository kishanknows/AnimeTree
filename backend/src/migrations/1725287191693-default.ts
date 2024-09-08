import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1725287191693 implements MigrationInterface {
    name = 'Default1725287191693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "watchlist" ("id" SERIAL NOT NULL, "user_id" uuid NOT NULL, "anime_id" integer NOT NULL, "thumbnail" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0c8c0dbcc8d379117138e71ad5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "watchlist"`);
    }

}
