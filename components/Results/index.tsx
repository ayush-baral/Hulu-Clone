import React, { Children } from "react";
import Thumbnail from "./Thumbnail.tsx";
// import FlipMove from "react-flip-move"; //error - solve later

const Results: React.FC<{ results: Array<Object> }> = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-start">
      {results.map((result, index) => {
        return <Thumbnail key={index} result={result} />;
      })}
    </div>
  );
};

export default Results;
