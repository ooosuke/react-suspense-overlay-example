import styled from "@emotion/styled";
import axios from "axios";
import { useQuery } from "react-query";

const Wrapper = styled.div`
  padding: 16px;
  margin: 16px;
`;

const Box = styled.div`
  display: flex;
  padding: 4px;
`;

const RefetchButton = styled.button``;

type Post = {
  id: number;
  title: string;
  description: string;
};

const fetchPosts = async () => {
  return new Promise<Post[]>((resolve) => {
    return setTimeout(async () => {
      const res = await axios.get<{ products: Post[] }>(
        "https://dummyjson.com/products"
      );
      resolve(res.data.products);
    }, 3000);
  });
};

export const Posts: React.FC = () => {
  const { data, refetch } = useQuery(["posts"], () => fetchPosts(), {
    suspense: true,
    staleTime: 0,
    cacheTime: 0,
  });

  return (
    <Wrapper>
      <RefetchButton onClick={() => refetch()}>refech</RefetchButton>
      {data &&
        data.map((d) => (
          <Box key={d.id}>
            <p>[{d.title}]: </p>
            <p>{d.description}</p>
          </Box>
        ))}
    </Wrapper>
  );
};
