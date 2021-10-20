import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { UserProvider } from "./user";
import { NameUserProvider } from "./nameUser";
import { DarkModeProvider } from "./darkMode";

const Providers = ({ children }) => {
  return (
    <HabitListProvider>
      <DarkModeProvider>
        <NameUserProvider>
          <UserProvider>
            <GoalsProvider>
              <ActivitiesProvider>
                <MyGroupListProvider>
                  <GroupListProvider>{children}</GroupListProvider>
                </MyGroupListProvider>
              </ActivitiesProvider>
            </GoalsProvider>
          </UserProvider>
        </NameUserProvider>
      </DarkModeProvider>
    </HabitListProvider>
  );
};

export default Providers;
