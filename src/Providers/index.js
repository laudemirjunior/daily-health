import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { AuthenticatedProvider } from "./authenticated";
import { NameUserProvider } from "./nameUser";

const Providers = ({ children }) => {
  return (
    <HabitListProvider>
      <MyGroupListProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <AuthenticatedProvider>
              <NameUserProvider>
                <GroupListProvider>{children}</GroupListProvider>
              </NameUserProvider>
            </AuthenticatedProvider>
          </ActivitiesProvider>
        </GoalsProvider>
      </MyGroupListProvider>
    </HabitListProvider>
  );
};

export default Providers;
