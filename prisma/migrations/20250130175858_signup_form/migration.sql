/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `researcherType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termsAcceptedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ResearcherType" AS ENUM ('academic', 'medical', 'corporate', 'not_researcher');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "department" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "institute" TEXT,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "researcherType" "ResearcherType" NOT NULL,
ADD COLUMN     "termsAcceptedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_researcherType_idx" ON "User"("researcherType");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
