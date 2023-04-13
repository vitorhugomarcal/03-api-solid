-- CreateTable
CREATE TABLE "exercisesbyuser" (
    "id" TEXT NOT NULL,
    "training" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "repetitions" TEXT NOT NULL,
    "timer" TEXT NOT NULL,
    "stop" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,

    CONSTRAINT "exercisesbyuser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "exercisesbyuser" ADD CONSTRAINT "exercisesbyuser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercisesbyuser" ADD CONSTRAINT "exercisesbyuser_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
