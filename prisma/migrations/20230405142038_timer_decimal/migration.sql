/*
  Warnings:

  - The `timer` column on the `exercisesbyuser` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "exercisesbyuser" DROP COLUMN "timer",
ADD COLUMN     "timer" DECIMAL(65,30);
