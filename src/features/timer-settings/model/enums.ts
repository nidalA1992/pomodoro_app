export enum TimerRanges {
  MAX_TIME = 60,
  MIN_TIME = 15,
  MAX_SMALL_BREAK = 10,
  MIN_SMALL_BREAK = 5,
  MAX_LARGE_BREAK = 30,
  MIN_LARGE_BREAK = 15,
  MAX_LARGE_BREAK_FREQUENCY = 6,
  MIN_LARGE_BREAK_FREQUENCY = 2,
}

export enum TimerOptionsActions {
  CHANGE_TIME_VALUE = "CHANGE_TIME_VALUE",
  CHANGE_SMALL_BREAK = "CHANGE_SMALL_BREAK",
  CHANGE_LARGE_BREAK = "CHANGE_LARGE_BREAK",
  CHANGE_LARGE_BREAK_FREQUENCY = "CHANGE_LARGE_BREAK_FREQUENCY ",
}