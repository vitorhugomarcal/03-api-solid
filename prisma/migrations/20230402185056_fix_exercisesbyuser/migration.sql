-- AlterTable
ALTER TABLE "exercisesbyuser" ALTER COLUMN "repetitions" DROP NOT NULL,
ALTER COLUMN "timer" DROP NOT NULL,
ALTER COLUMN "stop" DROP NOT NULL;
