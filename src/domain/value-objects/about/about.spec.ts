import { ValidationError } from "@/core/error"
import { About } from "./about"

describe("About", () => {
  it("should be able to create an about", () => {
    const about = new About("Descrição teste")

    expect(about.text).toBe("Descrição teste")
  })

  it("should not be able to create an about with more than 300 characters", () => {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum fermentum turpis, ac ultricies tortor convallis id. Aliquam erat volutpat. Phasellus dictum eleifend massa a porta. Proin fermentum, elit ut maximus tristique, ex nisi mollis neque, id hendrerit sem enim non lectus. Vivamus vel purus quis nibh pulvinar consequat. Suspendisse efficitur ligula eu magna vulputate, id tristique leo lobortis. Mauris suscipit pellentesque lacus, ac hendrerit turpis aliquam sed. Nunc dignissim purus id mauris iaculis sollicitudin. Sed laoreet malesuada eros, at dapibus metus dignissim id. Cras efficitur auctor tellus, id interdum nisi vestibulum sed. Sed at erat nec urna mattis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc sed purus vel mi tincidunt ultrices. Sed eget lacus nec ante varius vestibulum. Phasellus vulputate velit eu risus fermentum, nec bibendum mi fermentum."

    expect(async () => {
      const about = new About(text)
    }).rejects.toBeInstanceOf(ValidationError)
  })
})
