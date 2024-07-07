const mockClientInputAdd = {
  id: "123",
  name: "Genaro",
  email: "genaro@teste.com",
  document: "12345678900",
  address: {
    street: "Rua F",
    number: "61",
    complement: "Em frente ao mercado",
    city: "Macaubas",
    state: "BA",
    zipCode: "46500-000",
  }
}

const mockClientInputNotAdd = {
  id: "123",
  name: "",
  email: "genaro@teste.com",
  document: "12345678900",
  address: {
    street: "Rua F",
    number: "61",
    complement: "Em frente ao mercado",
    city: "Macaubas",
    state: "BA",
    zipCode: "46500-000",
  }
}

export { mockClientInputAdd, mockClientInputNotAdd }