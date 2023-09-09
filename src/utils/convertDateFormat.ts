import { format, parseISO } from 'date-fns';

export function convertDateFormat(inputDate: string) {
  const parsedDate = parseISO(inputDate);
  return format(parsedDate, 'dd.MM.yyyy');
}
