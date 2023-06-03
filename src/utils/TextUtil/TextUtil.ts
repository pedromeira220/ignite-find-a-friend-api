export class TextUtil {
  static onlyNumbers(value: string) {
    if (value == null) {
      return ""
    }

    const pattern = /[^0-9]/g
    return value.replace(pattern, "")
  }
}
