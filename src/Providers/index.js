import { GroupListProvider } from "./groupList";
import { HabitListProvider } from "./habitsList";
import { MyGroupListProvider } from "./myGroupList";
import { ShowCardsProvider } from "./showCards";

const Providers = ({ children }) => {
  return (
    <ShowCardsProvider>
      <MyGroupListProvider>
        <HabitListProvider>
          <GroupListProvider>{children}</GroupListProvider>
        </HabitListProvider>
      </MyGroupListProvider>
    </ShowCardsProvider>
  );
};

export default Providers;
