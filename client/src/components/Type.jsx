import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to Madhav's Blog",

          "Discover Knowledge and Insights Effortlessly!" ,

          "With Content from Top Bloggers!",
          
          
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        
        
      }}
    />
  );
}

export default Type;
