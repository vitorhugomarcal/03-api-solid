/*
  Warnings:

  - Made the column `series` on table `exercisesbyuser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exercisesbyuser" ALTER COLUMN "series" SET NOT NULL;
