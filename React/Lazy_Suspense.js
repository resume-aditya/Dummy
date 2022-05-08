// Suspense lets components “wait” for something before rendering.
// suspense only supports one use case: loading components dynamically with React.lazy
// In the future, it will support other use cases like data fetching.

// currently React.lazy function supports default exports only (not named)

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}