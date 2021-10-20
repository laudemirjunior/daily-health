import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GoalsProvider>
        <ActivitiesProvider>
          <MyGroupListProvider>
            <HabitListProvider>
              <GroupListProvider>{children}</GroupListProvider>
            </HabitListProvider>
          </MyGroupListProvider>
        </ActivitiesProvider>
      </GoalsProvider>
    </UserProvider>
  );
};

export default Providers;
