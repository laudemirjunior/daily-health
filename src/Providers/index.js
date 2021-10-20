import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { UserProvider } from "./user";
import { NameUserProvider } from "./nameUser";

const Providers = ({ children }) => {
  return (
    <NameUserProvider>
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
    </NameUserProvider>
  );
};

export default Providers;
