import * as React from "react";
import { RootStore } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../store/actions/articleActions";
import Card from "../components/Card";
import { Grid, Button } from "@chakra-ui/react";

const initSort = { sortBy: "_id", order: "desc", limit: 3, skip: 0 };

const Home = () => {
  // useReducer for sort managing
  const [sort, setSort] = React.useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    initSort
  );
  const articles = useSelector((state: RootStore) => state.articles);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // first render
    if (articles && !articles.fetchArticles) {
      dispatch(fetchArticles(initSort));
    }
  }, [dispatch, articles]);
  return (
    <>
      <Grid
        gap={6}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      >
        {articles?.fetchArticles &&
          articles.fetchArticles.map((article: any) => {
            return <Card key={article._id} article={article} />;
          })}
      </Grid>

      {/* ausblenden wenn keine blogs mehr gibt, mit total count @todo */}
      <Button
        onClick={() => {
          // console.log(articles.fetchArticles.length - 1);
          // define new Skip value
          let skip = sort.skip + sort.limit;
          // overwrite old skip with new Skip
          dispatch(fetchArticles({ ...sort, skip: skip }));
          // update skip state to new skip value
          setSort({ skip });
        }}
        colorScheme="blue"
        mt={16}
        mb={6}
      >
        Weitere Beiträge
      </Button>
    </>
  );
};

export default Home;

// import * as React from "react";

// const Home = () => {
//   return <div>hi</div>;
// };

// export default Home;
