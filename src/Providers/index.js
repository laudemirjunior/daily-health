import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";
import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { AuthenticatedProvider } from "./authenticated";

const Providers = ({ children }) => {
  return (
    <GoalsProvider>
      <ActivitiesProvider>
        <MyGroupListProvider>
          <HabitListProvider>
            <AuthenticatedProvider>
              <GroupListProvider>{children}</GroupListProvider>
            </AuthenticatedProvider>
          </HabitListProvider>
        </MyGroupListProvider>
      </ActivitiesProvider>
    </GoalsProvider>
  );
};

export default Providers;
