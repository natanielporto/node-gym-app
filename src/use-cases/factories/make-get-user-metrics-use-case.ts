import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsrepository } from "@/repositories/prisma/prisma-check-ins-repository";

export function makeUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsrepository();
  const useCase = new GetUserMetricsUseCase(checkInsRepository);

  return useCase;
}
