import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1718003260958 implements MigrationInterface {
    name = 'Default1718003260958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "headline" text NOT NULL, "url" text, "thumbnail" text, "time_posted" text NOT NULL, "hook" text NOT NULL, "full" text NOT NULL, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "news"`);
    }

}
