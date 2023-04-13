/*
  Warnings:

  - The `series` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "exercisesbyuser" DROP COLUMN "series",
ADD COLUMN     "series" DECIMAL(65,30),
ALTER COLUMN "timer" SET DATA TYPE TEXT;
