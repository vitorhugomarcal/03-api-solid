/*
  Warnings:

  - You are about to alter the column `series` on the `exercisesbyuser` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `repetitions` on the `exercisesbyuser` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `stop` on the `exercisesbyuser` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `position` on the `exercisesbyuser` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `timer` on the `exercisesbyuser` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "exercisesbyuser" ALTER COLUMN "series" SET DATA TYPE INTEGER,
ALTER COLUMN "repetitions" SET DATA TYPE INTEGER,
ALTER COLUMN "stop" SET DATA TYPE INTEGER,
ALTER COLUMN "position" SET DATA TYPE INTEGER,
ALTER COLUMN "timer" SET DATA TYPE INTEGER;
