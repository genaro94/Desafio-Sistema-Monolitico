import Address from "../../../@shared/domain/value-object/address/address.value-object";
import Client from "./client.entity";

describe("Client unit tests", () => {
  it("should throw error when name is empty", () => {
    expect(() => {
      const input = {
        name: "",
        email: "maria@email.com",
        document: "1234-5678",
        address: new Address(
          "Rua 1",
          "99",
          "Em frente ao mercado",
          "Ibipitanga",
          "BA",
          "88888-888"
        )
      }
      const client = new Client(input);
    }).toThrowError("client: Name is required");
  });
})