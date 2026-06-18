import { useEffect } from "react";
import { fetchNotifications } from "./api/notifications";

function App() {
  useEffect(() => {
    async function loadData() {
      try {
        const notifications = await fetchNotifications();
        console.log(notifications);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return (
    <div>
      <h1>Campus Notifications</h1>
    </div>
  );
}

export default App;