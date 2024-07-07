const mockInvoiceInputAdd = {
  id: "1",
  name: "Joana Silva",
  document: "1234567890",
  street: "Rua Xv",
  number: "1549",
  complement: "",
  city: "Macaubas",
  state: "BA",
  zipCode: "99999-999",
  items: [
    {
      id: "1",
      name: "Product mock 1",
      price: 20,
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockInvoiceInputNotAdd = {
  id: "3",
  name: "Joana Silva",
  document: "1234567890",
  street: "Rua Xv",
  number: "1549",
  complement: "",
  city: "Paramirim",
  state: "BA",
  zipCode: "99999-999",
  items: '',
  createdAt: new Date(),
  updatedAt: new Date()
}

export { mockInvoiceInputAdd, mockInvoiceInputNotAdd }