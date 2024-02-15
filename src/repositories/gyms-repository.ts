import { Gym, Prisma } from "@prisma/client";

export interface FindManyNearbyParams {
  latitude: string;
  longitude: string;
}

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>;
  create(data: Prisma.GymCreateInput): Promise<Gym>;
  searchMany(query: string, page: number): Promise<Gym[]>;
  findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>;
}
