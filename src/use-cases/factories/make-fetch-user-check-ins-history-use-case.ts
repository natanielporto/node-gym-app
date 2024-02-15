import { FetchUserCheckInsHistoryUseCase } from "../fetch-user-check-ins-history";
import { PrismaCheckInsrepository } from "@/repositories/prisma/prisma-check-ins-repository";

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsrepository();
  const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository);

  return useCase;
}
