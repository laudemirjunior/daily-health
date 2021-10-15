import { GroupListProvider } from "./groupList/groupList";
import { HabitListProvider } from "./habitsList/habitList";
import { MyGroupListProvider } from "./myGroupList/myGrouList";

const Providers = ({ children }) => {
  return (
    <MyGroupListProvider>
      <HabitListProvider>
        <GroupListProvider></GroupListProvider>
      </HabitListProvider>
    </MyGroupListProvider>
  );
};

export default Providers;
