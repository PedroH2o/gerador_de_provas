-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "theme" VARCHAR(255) NOT NULL,
    "enunciation" VARCHAR(2000) NOT NULL,
    "alternative_list" TEXT NOT NULL,
    "correct_alternative" TEXT NOT NULL,
    "id_test" INTEGER NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "simulated" (
    "id_simulated" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question_simulated" TEXT NOT NULL,
    "id_tests" INTEGER NOT NULL,
    "id_questions" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "simulated_pkey" PRIMARY KEY ("id_simulated")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performace" (
    "id" SERIAL NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "id_simulate" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "performace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "question_id_key" ON "question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "test_id_key" ON "test"("id");

-- CreateIndex
CREATE UNIQUE INDEX "simulated_id_simulated_key" ON "simulated"("id_simulated");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "performace_id_key" ON "performace"("id");

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulated" ADD CONSTRAINT "simulated_id_tests_fkey" FOREIGN KEY ("id_tests") REFERENCES "test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulated" ADD CONSTRAINT "simulated_id_questions_fkey" FOREIGN KEY ("id_questions") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "simulated" ADD CONSTRAINT "simulated_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performace" ADD CONSTRAINT "performace_id_simulate_fkey" FOREIGN KEY ("id_simulate") REFERENCES "simulated"("id_simulated") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performace" ADD CONSTRAINT "performace_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

