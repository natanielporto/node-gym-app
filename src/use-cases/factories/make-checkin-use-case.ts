import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { CheckInUseCase } from "../check-in";
import { PrismaCheckInsrepository } from "@/repositories/prisma/prisma-check-ins-repository";

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsrepository();
  const gymsRepository = new PrismaGymsRepository();
  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository);

  return useCase;
}
