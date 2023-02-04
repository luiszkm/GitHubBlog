import moment from "moment";

export const dataFormatter = new Intl.DateTimeFormat('en-US')

export function DateDiferenceInDays(created_at: string | undefined) {
  if (typeof created_at === 'string') {
    const dateRecibeString = dataFormatter.format(new Date(created_at))

    const now = moment(new Date()); // Data de hoje
    const past = moment(dateRecibeString); // Outra data no passado
    const duration = moment.duration(now.diff(past));

    // Mostra a diferença em dias
    const days = Math.round(duration.asDays());

    return days
  }else{
    return
  }
}