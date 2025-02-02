import Address from "../../@shared/domain/value-object/address/address.value-object";
import Id from "../../@shared/domain/value-object/id.value-object";
import Invoice from "../domain/entity/invoice.entity";
import InvoiceItems from "../domain/entity/invoice-items.entity";

export const mockAddress1: Address = new Address('Rua F', '123', 'apto 1', 'Macaúbas', 'BA', '12345678');
export const mockAddress2: Address = new Address('Rua F', '123', 'apto 2', 'Macaúbas', 'BA', '87654321');

export const mockItem1 = new InvoiceItems({
  id: new Id(),
  name: "Product mock 1",
  price: 100,
});

export const mockItem2 = new InvoiceItems({
  id: new Id(),
  name: "Product mock 2",
  price: 20,
});

export const mockItems: InvoiceItems[] = [mockItem1, mockItem2];

export const mockInvoice1 = new Invoice({
  id: new Id(),
  name: "John Doe",
  document: "123456789",
  address: mockAddress1,
  items: mockItems,
});

export const mockInvoice2 = new Invoice({
  id: new Id(),
  name: "Mary Doe",
  document: "974287599",
  address: mockAddress2,
  items: [mockItem2],
});

export const MockInvoiceInput = {
  name: "Mary Smith",
  document: "1234567890",
  street: "Rua Xv",
  number: "1549",
  complement: "",
  city: "Macaubas",
  state: "BA",
  zipCode: "99999-999",
  items: [
    {
      id: new Id().id,
      name: "Product mock 1",
      price: 20,
    }
  ]
}

export const MockInvoiceRepository = {
  generate: jest.fn().mockReturnValue(Promise.resolve(mockInvoice1)),
  find: jest.fn().mockReturnValue(Promise.resolve(mockInvoice1)),
};