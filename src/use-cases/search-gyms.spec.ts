import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { SearchGymUseCase } from "./search-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: SearchGymUseCase;

describe("Search gyms use case", () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new SearchGymUseCase(gymsRepository);
  });

  it("should be able to search for gyms", async () => {
    await gymsRepository.create({
      title: "A",
      description: null,
      latitude: "0",
      longitude: "0",
      phone: null,
    });

    await gymsRepository.create({
      title: "B",
      description: null,
      latitude: "0",
      longitude: "0",
      phone: null,
    });

    const { gyms } = await sut.execute({
      query: "A",
      page: 1,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: "A" })]);
  });

  it("should be able to fetch paginated gym search", async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `A-${i}`,
        description: null,
        latitude: "0",
        longitude: "0",
        phone: null,
      });
    }

    const { gyms } = await sut.execute({
      query: "A",
      page: 2,
    });

    expect(gyms).toHaveLength(2);
    expect(gyms).toEqual([
      expect.objectContaining({ title: "A-21" }),
      expect.objectContaining({ title: "A-22" }),
    ]);
  });
});
