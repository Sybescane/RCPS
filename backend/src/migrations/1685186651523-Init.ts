import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1685186651523 implements MigrationInterface {
    name = 'Init1685186651523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscribe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "cost" integer NOT NULL, CONSTRAINT "PK_3e91e772184cd3feb30688ef1b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trainers" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "profile" character varying NOT NULL, "experience" integer NOT NULL, CONSTRAINT "PK_198da56395c269936d351ab774b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_subscribe" ("subscribe_id" integer NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "PK_80809b5aed343519fc2784a3a25" PRIMARY KEY ("subscribe_id", "client_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_80bc9b610e86391b9b7a4ec826" ON "client_subscribe" ("subscribe_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_d81bb1f392f7286f5ccd36f849" ON "client_subscribe" ("client_id") `);
        await queryRunner.query(`CREATE TABLE "client_trainer" ("trainer_id" integer NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "PK_bd093208395bb01b8e389967c07" PRIMARY KEY ("trainer_id", "client_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_144027bcd24de925a8fe2fa811" ON "client_trainer" ("trainer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_854ef81025d08a3cee547a80f4" ON "client_trainer" ("client_id") `);
        await queryRunner.query(`ALTER TABLE "client_subscribe" ADD CONSTRAINT "FK_80bc9b610e86391b9b7a4ec8264" FOREIGN KEY ("subscribe_id") REFERENCES "subscribe"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_subscribe" ADD CONSTRAINT "FK_d81bb1f392f7286f5ccd36f849f" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_trainer" ADD CONSTRAINT "FK_144027bcd24de925a8fe2fa8115" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_trainer" ADD CONSTRAINT "FK_854ef81025d08a3cee547a80f44" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_trainer" DROP CONSTRAINT "FK_854ef81025d08a3cee547a80f44"`);
        await queryRunner.query(`ALTER TABLE "client_trainer" DROP CONSTRAINT "FK_144027bcd24de925a8fe2fa8115"`);
        await queryRunner.query(`ALTER TABLE "client_subscribe" DROP CONSTRAINT "FK_d81bb1f392f7286f5ccd36f849f"`);
        await queryRunner.query(`ALTER TABLE "client_subscribe" DROP CONSTRAINT "FK_80bc9b610e86391b9b7a4ec8264"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_854ef81025d08a3cee547a80f4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_144027bcd24de925a8fe2fa811"`);
        await queryRunner.query(`DROP TABLE "client_trainer"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d81bb1f392f7286f5ccd36f849"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_80bc9b610e86391b9b7a4ec826"`);
        await queryRunner.query(`DROP TABLE "client_subscribe"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "trainers"`);
        await queryRunner.query(`DROP TABLE "subscribe"`);
    }

}
