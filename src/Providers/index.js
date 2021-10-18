import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";

const Providers = ({ children }) => {
  return (
    <GoalsProvider>
      <ActivitiesProvider>
        <MyGroupListProvider>
          <HabitListProvider>
            <GroupListProvider>{children}</GroupListProvider>
          </HabitListProvider>
        </MyGroupListProvider>
      </ActivitiesProvider>
    </GoalsProvider>
  );
};

export default Providers;
