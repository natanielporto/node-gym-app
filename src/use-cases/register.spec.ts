import { beforeEach, describe, expect, it } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe("Register use case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });

  it("should be able to register", async () => {
    const { user } = await sut.execute({
      name: "AA",
      email: "bb@bb.com",
      password: "123153",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should hash user password upon registration", async () => {
    const { user } = await sut.execute({
      name: "AA",
      email: "bb@bb.com",
      password: "123153",
    });

    const isPasswordHashed = await compare("123153", user.password_hash);

    expect(isPasswordHashed).toBe(true);
  });

  it("should not be able to register with the same e-mail twice", async () => {
    const email = "aa@gmail.com";

    await sut.execute({
      name: "AA",
      email,
      password: "123153",
    });

    await expect(() =>
      sut.execute({
        name: "AA",
        email,
        password: "123153",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
