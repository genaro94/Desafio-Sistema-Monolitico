import Address from "../../../@shared/domain/value-object/address/address.value-object"
import Id from "../../../@shared/domain/value-object/id.value-object"
import Client from "../../domain/entity/client.entity"
import FindClientUseCase from "./find-client.usecase"

const client = new Client({
  id: new Id("1"),
  name: "Jose",
  email: "jose@email.com",
  document: "1234-5678",
  address: new Address(
    "Rua F23",
    "99",
    "Em frente ao mercado",
    "Paramirim",
    "BA",
    "88888-888",
  )
})

const MockRepository = () => {

  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(client))
  }
}

describe("Find Client use case unit test", () => {

  it("should find a client", async () => {

    const repository = MockRepository()
    const usecase = new FindClientUseCase(repository)

    const input = {
      id: "1"
    }

    const result = await usecase.execute(input)

    expect(repository.find).toHaveBeenCalled()
    expect(result.id).toEqual(input.id)
    expect(result.name).toEqual(client.name)
    expect(result.email).toEqual(client.email)
    expect(result.address).toEqual(client.address)
    expect(result.createdAt).toEqual(client.createdAt)
    expect(result.updatedAt).toEqual(client.updatedAt)
  })
})