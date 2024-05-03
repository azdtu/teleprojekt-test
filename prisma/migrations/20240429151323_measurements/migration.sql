-- CreateTable
CREATE TABLE "Measurement" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" TEXT NOT NULL,

    CONSTRAINT "Measurement_pkey" PRIMARY KEY ("id")
);
