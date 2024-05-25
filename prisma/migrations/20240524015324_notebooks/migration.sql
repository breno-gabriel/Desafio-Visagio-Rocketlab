-- CreateTable
CREATE TABLE "Notebook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.0,
    "creatAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
