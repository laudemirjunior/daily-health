import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { AuthProvider } from "./auth";
import { NameUserProvider } from "./nameUser";
import { DarkModeProvider } from "./darkMode";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitListProvider>
        <DarkModeProvider>
          <NameUserProvider>
            <GoalsProvider>
              <ActivitiesProvider>
                <MyGroupListProvider>
                  <GroupListProvider>{children}</GroupListProvider>
                </MyGroupListProvider>
              </ActivitiesProvider>
            </GoalsProvider>
          </NameUserProvider>
        </DarkModeProvider>
      </HabitListProvider>
    </AuthProvider>
  );
};

export default Providers;
