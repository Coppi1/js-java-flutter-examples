import StsText from "./components/StsText";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css";

export default function App() {
  //const tech = "React";

  return (
    <div
      // style={{
      //   display: "grid",
      //   backgroundColor: "#543268",
      //   minHeight: "100vh",
      //   placeContent: "center",
      //   textAlign: "center",
      // }}

      className={styles.app}
    >
      <Title></Title>
      <Subtitle></Subtitle>
      <StsText></StsText>
    </div>
  );
}
