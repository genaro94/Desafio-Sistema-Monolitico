import Address from "../../@shared/domain/value-object/address/address.value-object";
import Id from "../../@shared/domain/value-object/id.value-object";
import Client from "../domain/entity/client.entity";

export const mockClientAdmInput = {
  id: new Id(),
  name: "Jose",
  email: "jose@email.com",
  document: "1234-5678",
  address: new Address(
    "Rua F",
    "99",
    "Em frente ao mercado",
    "Macaúbas",
    "BA",
    "88888-888"
  )
}

export const mockClient = new Client(mockClientAdmInput)


export const MockClientAdmRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(mockClient))
  }
}