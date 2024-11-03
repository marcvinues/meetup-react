import { useEffect, useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "../util-hooks/useFetch";

export default function AllMeetupsPage() {
  const { data: fetchedData } = useFetch({
    url: "/data.json",
  });

  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    if (Array.isArray(fetchedData)) {
      const localData = JSON.parse(localStorage.getItem("meetup")) || [];
      const validLocalData = Array.isArray(localData) ? localData : [];
      const updatedData = [...fetchedData, ...validLocalData];

      setCombinedData(updatedData);
    }
  }, [fetchedData]);

  if (!fetchedData) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {combinedData.map((item) => (
          <MeetupItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
