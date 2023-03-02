import React from "react";
import config from "../config/index.json";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => {
              return (
                <div key={feature.name} className="relative">
                  <dt>
                    <div
                      className={`absolute flex items-center justify-center h-15 w-15 rounded-md bg-background text-tertiary`}
                    >
                      {feature.name == "Videos" ? (
                        <OndemandVideoIcon
                          fontSize="large"
                          className="text-secondary"
                        />
                      ) : feature.name == "Courses" ? (
                        <CastForEducationIcon
                          fontSize="large"
                          className="text-secondary"
                        />
                      ) : feature.name == "Merchandise" ? (
                        <StorefrontIcon
                          fontSize="large"
                          className="text-secondary"
                        />
                      ) : (
                        <SavingsOutlinedIcon
                          fontSize="large"
                          className="text-secondary"
                        />
                      )}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
