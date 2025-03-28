import React, { useState, useRef, useEffect } from "react";
import { Degrees } from "../data";
import { Link } from "react-router-dom";

function DegreeOverview() {
  const categories = ["bachelors", "masters", "diploma", "certification"];
  const [allDegrees, setAllDegrees] = useState(Degrees);

  // Ensure we have all degrees loaded
  useEffect(() => {
    // If Degrees is fetched asynchronously, this will ensure we have the latest data
    setAllDegrees(Degrees);
  }, []);

  const getCategoryCount = (category) => {
    return allDegrees.filter((degree) => degree.type === category).length;
  };

  const getFieldCount = (category, field) => {
    return allDegrees.filter(
      (degree) => degree.type === category && degree.field === field
    ).length;
  };

  const getFieldsForCategory = (category) => {
    return [
      ...new Set(
        allDegrees
          .filter((degree) => degree.type === category)
          .map((degree) => degree.field)
      ),
    ];
  };

  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedField, setExpandedField] = useState(null);
  const categoryRefs = useRef({});

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedField(null);
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleField = (field) => {
    setExpandedField(expandedField === field ? null : field);
  };

  const safeBase64Encode = (str) => {
    // First encode the string as UTF-8, then convert to base64
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, 
      (match, p1) => String.fromCharCode(parseInt(p1, 16))
    ));
  }

  return (
    <section className="bg-[#800000]/5 py-12">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto lg:px-8">
        <div className="lg:ps-6 text-center lg:text-left mb-6">
          <h1 className="text-4xl font-semibold lg:underline underline-offset-4 text-[#800000]">
            Courses Overview
          </h1>
          <p className="text-gray-900 mt-4">
            Explore the variety of courses we offer across different fields and
            categories. We have {allDegrees.length} programs available.
          </p>
        </div>

        <div
          className={`p-6 grid ${
            expandedCategory != null ? "lg:grid-cols-1" : "lg:grid-cols-2"
          } gap-6`}
        >
          {categories.map((category) => (
            <div
              key={category}
              className="mb-4"
              ref={(el) => (categoryRefs.current[category] = el)}
            >
              <div
                className="cursor-pointer p-4 bg-[#800000] text-white rounded-lg flex justify-between items-center"
                onClick={() => toggleCategory(category)}
              >
                <h2 className="text-lg lg:text-xl font-bold capitalize">
                  {category} - ({getCategoryCount(category)})
                </h2>
                <span className="text-2xl">
                  {expandedCategory === category ? "-" : "+"}
                </span>
              </div>
              {expandedCategory === category && (
                <div className="mt-4 lg:ml-4">
                  <div className={`grid lg:grid-cols-2 gap-4`}>
                    {getFieldsForCategory(category).length > 0 ? (
                      getFieldsForCategory(category).map((field) => (
                        <div key={field} className="mb-2">
                          <div
                            className="cursor-pointer p-2 font-semibold bg-[#800000]/10 rounded-lg flex justify-between items-center"
                            onClick={() => toggleField(field)}
                          >
                            <h3 className="text-base lg:text-lg text-[#800000] capitalize">
                              {field} - ({getFieldCount(category, field)})
                            </h3>
                            <span className="text-[#800000]">
                              {expandedField === field ? "-" : "+"}
                            </span>
                          </div>
                          {expandedField === field && (
                            <div className="mt-2 ml-4">
                              <ul className="list-disc list-inside">
                                {allDegrees
                                  .filter(
                                    (degree) =>
                                      degree.type === category &&
                                      degree.field === field
                                  )
                                  .map((degree) => (
                                    <li
                                      key={degree.id}
                                      className="text-gray-900 text-sm lg:text-base mb-1"
                                    >
                                      {degree.title} -{" "}
                                      <Link
                                        to={`/contact/${safeBase64Encode(degree.title)}`}
                                        className="hover:underline"
                                      >
                                        consult
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-4">
                        <p className="text-gray-700">
                          No fields found for this category.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DegreeOverview;
