export const dataFormatterDonut = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export const dataFormatters = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();
