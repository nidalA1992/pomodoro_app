import StatisticPageLayout from "pages/statistics/ui/statistic-page-layout";

import { DayDescription } from "widgets/activity/ui/day-description";
import { PomodoroAmount } from "widgets/activity/ui/pomodoro-amount";
import { CustomSelect } from "features/activity/week-filter/ui";
import { Title } from "shared/ui";
import { CustomChart } from "features/activity/activity-chart/ui";

import { ToBack } from "./ui/to-back";

const Index = () => {
  return (
    <StatisticPageLayout
      head={
        <>
          <Title>Статистика</Title>
          <CustomSelect />
        </>
      }
    >
      <DayDescription />
      <PomodoroAmount />
      <CustomChart />
      <ToBack />
    </StatisticPageLayout>
  );
};

export default Index;
