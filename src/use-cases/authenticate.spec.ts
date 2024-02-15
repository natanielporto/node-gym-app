import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { AuthenticateUseCase } from "./authenticate";
import { hash } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let usersRepository: InMemoryUsersRepository;
let sut: AuthenticateUseCase;

describe("Authenticate use case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new AuthenticateUseCase(usersRepository);
  });
  it("should be able to authenticate", async () => {
    await usersRepository.create({
      name: "AA",
      email: "bb@bb.com",
      password_hash: await hash("123153", 6),
    });

    const { user } = await sut.execute({
      email: "bb@bb.com",
      password: "123153",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to authenticate with wrong email", async () => {
    await expect(
      sut.execute({
        email: "bb@bb.com",
        password: "123153",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
  it("should not be able to authenticate with wrong email", async () => {
    await expect(
      sut.execute({
        email: "bb@bb.com",
        password: "123153",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      name: "AA",
      email: "bb@bb.com",
      password_hash: await hash("123153", 6),
    });

    expect(
      sut.execute({
        email: "bb@bb.com",
        password: "123154",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
