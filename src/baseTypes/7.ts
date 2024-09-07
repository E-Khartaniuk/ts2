/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  MONDAY = 'monday',
TUESDAY = 'tuesday',
WEDNESDAY = `wednesday`,
THURSDAY =`thursday`,
FRIDAY = `friday`,
SATURDAY = `saturday`,
SUNDAY = `sunday`
}

function isWeekend(day: Week): boolean {
  switch (day) {
    case Week.SATURDAY:
    case Week.SUNDAY:
      return true;
    default:
      return false;
  }
}

// Виклик функції
console.log(isWeekend(Week.MONDAY));  // false
console.log(isWeekend(Week.SATURDAY));  // true