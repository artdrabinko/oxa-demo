import { useHomePage } from "@/hooks";
import { Grid } from "@/components/layout";
import { Menu } from "@/components/home";
import styles from "./Home.module.css";

export const Home = () => {
  const { movies, loading } = useHomePage();

  return (
    <div id="scroll" className={styles.container}>
      <Menu />
      <Grid items={movies} loading={loading} />
    </div>
  );
};
