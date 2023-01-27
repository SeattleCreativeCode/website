export function isDatePast(date: Date): boolean {
    return date.getTime() < new Date().getTime();
}