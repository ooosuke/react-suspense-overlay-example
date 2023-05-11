import { LoadingOverlay } from "./Overlay";
import { ErrorBoundary } from "./ErrorBoundary";
import { Posts } from "./Posts";
import { SuspenseOverlay } from "./SuspenseOverlay";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "@emotion/styled";
import { Suspense } from "react";

const queryClient = new QueryClient();

const Container = styled.div``;

const Header = styled.h1`
  font-size: 18px;
`;

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SuspenseOverlay fallback={<LoadingOverlay />}>
          <Container>
            <Header>Suspense Overlay</Header>
            <Posts />
          </Container>
        </SuspenseOverlay>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
