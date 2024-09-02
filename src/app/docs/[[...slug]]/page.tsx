import React from "react";

// Catch all Segments
const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for feactures {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feacture {params.slug[0]} </h1>;
  }

  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  );
};

export default Docs;
