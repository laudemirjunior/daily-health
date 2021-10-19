import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { NameUserProvider } from "./nameUser";
const Providers = ({ children }) => {
  return (
    <GoalsProvider>
      <ActivitiesProvider>
        <MyGroupListProvider>
          <HabitListProvider>
            <NameUserProvider>
              <GroupListProvider>{children}</GroupListProvider>
            </NameUserProvider>
          </HabitListProvider>
        </MyGroupListProvider>
      </ActivitiesProvider>
    </GoalsProvider>
  );
};

export default Providers;
