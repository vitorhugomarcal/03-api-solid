/*
  Warnings:

  - The `repetitions` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `stop` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `position` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `timer` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "exercisesbyuser" DROP COLUMN "repetitions",
ADD COLUMN     "repetitions" DECIMAL(65,30),
DROP COLUMN "stop",
ADD COLUMN     "stop" DECIMAL(65,30),
DROP COLUMN "position",
ADD COLUMN     "position" DECIMAL(65,30),
DROP COLUMN "timer",
ADD COLUMN     "timer" DECIMAL(65,30);
