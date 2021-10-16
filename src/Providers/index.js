import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";

const Providers = ({ children }) => {
  return (
    <MyGroupListProvider>
      <HabitListProvider>
        <GroupListProvider>{children}</GroupListProvider>
      </HabitListProvider>
    </MyGroupListProvider>
  );
};

export default Providers;
