import { Container, Heading, Page } from "../../components";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <Page>
      <Container>
        <Heading level={1}>Welcome Home!</Heading>
        <Button >This is the home page.</Button>
      </Container>
    </Page>
  );
};

export default Home;
