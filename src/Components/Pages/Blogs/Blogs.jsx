import React from "react";
import useTitle from "../../../CustomHooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="flex justify-center w-full items-center bg_secondary py-24">
      <div className="w-3/4">
        <div className="border border-black bg-white mb-4 ">
          <h2 className="bg-black text-lg text-white text-center py-2 font-bold p-5">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-black p-5 text-lg font-semibold">
            Access token is a Short-lived credential granting access to
            protected resources and Refresh token is a Long-lived credential
            which is used to get new access tokens without re-authentication.
            The server verifies the access token's validity and checks the
            permissions. If the access token expires, the client can send the
            refresh token to the server. The server verifies the refresh token
            and, if valid, issues a new access token. This process allows the
            client to maintain his access without reauthentication .On client
            side , we should use secure HTTP-only cookies with appropriate
            settings .
          </p>
        </div>
        <div className="border border-black bg-white mb-4">
          <h2 className="bg-black text-lg text-white text-center py-2 font-bold p-5">
            Compare SQL and NoSQL databases.
          </h2>
          <p className="text-black p-5 text-lg font-semibold">
            SQL databases are based on a relational model. They use predefined
            schemas to define the structure of data. They're suitable for
            applications that require strong consistency and complex querying
            capabilities. NoSQL databases are designed for schema-less data.
            They offer flexible schemas and can handle large volumes of changing
            data. They are suitable for real-time analytics and applications
            dealing with high data velocity.
          </p>
        </div>
        <div className="border border-black bg-white mb-4">
          <h2 className="bg-black text-lg text-white text-center py-2 font-bold p-5">
            What is express js? What is Nest JS ?
          </h2>
          <p className="text-black p-5 text-lg font-semibold f">
            Express.js is a minimalistic and flexible web framework for Node.js
            and Nest.js is a progressive and opinionated web application
            framework for Node.js, inspired by Angular.
          </p>
        </div>
        <div className="border border-black bg-white mb-4 ">
          <h2 className="bg-black text-lg text-white text-center py-2 font-bold p-5">
            What is MongoDB aggregate and how does it work ?
          </h2>
          <p className="text-black p-5 text-lg font-semibold">
            MongoDB's aggregate operation is used for advanced data analysis and
            transformation. It works by processing data through a line of
            stages.The result of the last stage is returned as the output,It
            allow us for complex queries and aggregations on large datasets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
