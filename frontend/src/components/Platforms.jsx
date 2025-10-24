import React from "react";
import Kubernetes from "../assets/kubernetes.png";
import Airflow from "../assets/airflow.png";
import Dbt from "../assets/dbt-logo-w.png";
import Snowflake from "../assets/snowflake-color.svg";
import Go from "../assets/Go_Logo_Blue.png";
import Python from "../assets/Python-logo-notext.png";
function Platforms() {
  return (
    <section id="platforms" className="">
      <div className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center px-4">
        <div className="text-center mx-auto reveal">
          <div className="flex gap-3 md:gap-5 flex-wrap justify-center">
            <img
              src={Kubernetes}
              alt="Kubernetes"
              className="w-30 h-20 md:w-50 md:h-30 reveal"
            />
            <img
              src={Airflow}
              alt="Airflow"
              className="w-20 h-20 md:w-30 md:h-30 md:mr-5 reveal"
            />
            <img
              src={Dbt}
              alt="Dbt"
              className="w-50 h-20 md:w-80 md:h-30 md:mr-5 reveal"
            />
            <img
              src={Snowflake}
              alt="Snowflake"
              className="w-20 h-20 md:w-30 md:h-30 md:mr-5 reveal"
            />
            <img
              src={Go}
              alt="Go"
              className="w-30 h-20 md:w-50 md:h-30 md:mr-5 reveal"
            />
            <img
              src={Python}
              alt="Python"
              className="w-20 h-20 md:w-30 md:h-30 reveal"
            />
          </div>
          <h1 className="mt-10 md:mt-20 text-3xl md:text-5xl text-slate-200 font-semibold reveal justify-center px-4">
            Platforms | Technologies | Languages
          </h1>
          <p className="mt-6 md:mt-10 text-base md:text-lg text-slate-200 mx-auto max-w-4xl px-4 reveal">
            As a Data Engineer, I work with a variety of platforms,
            technologies, and programming languages to build robust data
            solutions. The Data Engineering world is constantly evolving, and I
            stay up-to-date with the latest tools and trends to deliver
            efficient and scalable data solutions. Although I have my
            preferences, I believe it is more important to focus on principles
            and best practices rather than being tied to specific tools or
            technologies.
          </p>
          <p className="mt-6 md:mt-10 text-base md:text-lg text-slate-200 mx-auto max-w-4xl px-4 reveal">
            Below is a list of some of the platforms, technologies, and
            programming languages I have experience with:
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center mt-6 md:mt-10 px-4 reveal">
            <div className="text-slate-200">
              <h1 className="font-bold bg-slate-200 text-slate-900 p-2 mb-2 rounded-full reveal">
                Data Engineering
              </h1>
              <ul>
                <li>Apache Airflow</li>
                <li>Dbt</li>
                <li>Snowflake</li>
                <li>Kafka</li>
                <li>Benthos (Redpanda Connect)</li>
                <li>Duckdb & DuckLake</li>
                <li>Sling</li>
                <li>Airbyte</li>
                <li>Trino</li>
                <li>Iceberg</li>
                <li>MinIO</li>
              </ul>
            </div>
            <div className="text-slate-200">
              <h1 className="font-bold bg-slate-200 text-slate-900 p-2 mb-2 rounded-full reveal">
                CI/CD & Infrastructure
              </h1>
              <ul>
                <li>Kubernetes</li>
                <li>Azure</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="text-slate-200">
              <h1 className="font-bold bg-slate-200 text-slate-900 p-2 mb-2 rounded-full reveal">
                Languages
              </h1>
              <ul>
                <li>Python</li>
                <li>Go</li>
                <li>SQL</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="text-slate-200">
              <h1 className="font-bold bg-slate-200 text-slate-900 p-2 mb-2 rounded-full reveal">
                Web Development
              </h1>
              <ul>
                <li>Django</li>
                <li>Express</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platforms;
