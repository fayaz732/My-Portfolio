import { useEffect, useState } from "react";

import {
  FaJava,
} from "react-icons/fa";

import {
  MdCode,
} from "react-icons/md";

import API from "../../services/api";

import "./Learning.css";

function Learning() {

  const [learning, setLearning] =
    useState([]);

  useEffect(() => {

    fetchLearning();

  }, []);

  const fetchLearning =
    async () => {

      try {

        const { data } =
        await API.get(
          "/learning"
        );

        setLearning(data);

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <section
      className="section"
    >

      <h2>
        Currently Learning
      </h2>

      <div
        className="learning-grid"
      >

        {learning.map(
          (item) => (

            <div
              key={item._id}
              className="learning-card"
            >

              <div
                className="learning-icon"
              >

                {item.title
                  .toLowerCase()
                  .includes(
                    "java"
                  ) ? (
                  <FaJava />
                ) : (
                  <MdCode />
                )}

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {
                  item.description
                }
              </p>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Learning;