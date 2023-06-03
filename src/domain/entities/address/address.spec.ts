import { Address } from "./address"

test("it should be able to create an address", () => {
  const address = Address.create({
    city: "City",
    country: "Country",
    number: "123",
    state: "State",
    street: "street",
    zipCode: "123456",
  })

  expect(address.zipCode).toEqual(expect.any(String))
  expect(address).toBeInstanceOf(Address)
})
