import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/actions/countries";
import style from "./SideBar.module.scss";
import { useFetchActivities } from "./../../hooks/useFetchActivities";
import FieldsSideBar from "./Fields/FieldsSideBar";

const SideBar = () => {
  // Initialize React hooks and references
  const dispatch = useDispatch();
  const [actualFilters, setActualFilters] = useState({
    name: "",
    order: "", // Refers to sorting order, e.g., alphabetically or by population
    continent: "",
    activity: "",
  });
  const [searchedCountry, setSearchedCountry] = useState({ value: "" });

  const { activities } = useFetchActivities();

  // define useRef variables
  // each of these useRef variables will be used to store references to specific DOM elements - to avoid unnecessary re-rendering
  //later i attach these useRef variables to the respective DOM elements by using the ref attribute
  const asideContainer = useRef(null);
  const orderAlphabetically = useRef(null);
  const orderContinent = useRef(null);
  const orderPopulation = useRef(null);
  const orderActivity = useRef(null);

  // Function to clear applied filters
  const clearFilters = () => {
    asideContainer.current.classList.toggle(style.showContainer);
  };

  // Function to toggle filter panel visibility
  const handleShowFilters = (e) => {
    e.preventDefault();
    asideContainer.current.classList.toggle(style.showContainer);
  };

  // Function to clear all applied filters
  const handleClearFilters = () => {
    // Reset filter-related states and select elements
    setSearchedCountry({ value: "" });
    orderContinent.current.selectedIndex = 0;
    orderAlphabetically.current.selectedIndex = 0;
    orderPopulation.current.selectedIndex = 0;
    orderActivity.current.selectedIndex = 0;
    setActualFilters({ name: "", order: "", continent: "", activity: "" });
    clearFilters();
  };

  // Function to handle form submission when searching by name
  const handleOnSubmit = (e) => {
    e.preventDefault();
    clearFilters();
    // Update the 'name' filter based on user input
    setActualFilters((state) => {
      return { ...state, name: searchedCountry.value.trim() };
    });
  };

  // Function to handle input change when searching by name
  const handleInputChange = (e) => {
    setSearchedCountry({ value: e.target.value });
  };

  // Function to handle continent filter selection
  const handleContinentSelect = (e) => {
    clearFilters();
    // Update the 'continent' filter based on user selection
    setActualFilters((state) => {
      return { ...state, continent: e.target.value };
    });
  };

  // Function to handle alphabetical order filter selection
  const handleAlphabeticallySelect = (e) => {
    clearFilters();
    let order = "None";
    if (e.target.value === "Z-A") order = "DES_ALPHABETICALLY";
    else if (e.target.value === "A-Z") order = "ASC_ALPHABETICALLY";
    orderPopulation.current.selectedIndex = 0;
    // Update the 'order' filter based on user selection
    setActualFilters((state) => {
      return { ...state, order };
    });
  };

  // Function to handle population order filter selection
  const handlePopulationSelect = (e) => {
    clearFilters();
    let order = "None";
    if (e.target.value === "Descendent") order = "DES_POPULATION";
    else if (e.target.value === "Ascendent") order = "ASC_POPULATION";
    orderAlphabetically.current.selectedIndex = 0;
    // Update the 'order' filter based on user selection
    setActualFilters((state) => {
      return { ...state, order };
    });
  };

  // Function to handle activity filter selection
  const handleActivitySelect = (e) => {
    clearFilters();
    // Update the 'activity' filter based on user selection
    setActualFilters((state) => {
      return { ...state, activity: e.target.value };
    });
  };

  // Effect hook to dispatch filterCountries action whenever actualFilters change
  useEffect(() => {
    dispatch(filterCountries(actualFilters));
  }, [actualFilters]);

  return (
    <>
    <div className="style.containerbig">

      <div className={style.btnMenuFilters}>
        {/* Button to toggle filter panel visibility */}
        <a onClick={handleShowFilters} href="#">Filters
        </a>
      </div>
      {/* Filter panel */}
      <aside ref={asideContainer} className={style.container}>
        <h2>Filters</h2>

        {/* Button to clear all filters */}
        <div className={style.btnClearContainer}>
          <button onClick={handleClearFilters} className={style.btnClear}>
            Clear Filters
          </button>
        </div>

        {/* Search filter by name */}
        <div className={style.searchContainer}>
          <div className={style.labelSearch}>
            <label htmlFor="filter">By Name</label>
          </div>
          <div className={style.inputSearchContainer}>
            <form onSubmit={handleOnSubmit}>
              <input
                onChange={handleInputChange}
                value={searchedCountry.value}
                type="text"
                placeholder="Country name"
                id="filter"
                />
              <button
                onClick={handleOnSubmit}
                href="#"
                className={style.btnSearch}
                >
                🔎
              </button>
            </form>
          </div>
        </div>

        {/* Select filters */}
        <FieldsSideBar id={"continent"} text={"Order by Continent"}>
          <select
            onChange={handleContinentSelect}
            ref={orderContinent}
            defaultValue={"All"}
            className={style.select}
            id="continent"
            >
            {/* Options for continent filter */}
            {Array.from([
              "All",
              "Africa",
              "Antarctica",
              "Asia",
              "Europe",
              "South America",
              "North America",
              "Oceania",
            ]).map((continent) => {
              return (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              );
            })}
          </select>
        </FieldsSideBar>

        {/* Alphabetical order filter */}
        <FieldsSideBar id={"orderAlphabetically"} text={"Order Alphabetically"}>
          <select
            onChange={handleAlphabeticallySelect}
            ref={orderAlphabetically}
            defaultValue={"None"}
            className={style.select}
            id="orderAlphabetically"
            >
            {/* Options for alphabetical order filter */}
            <option value="None">None</option>
            {Array.from(["A-Z", "Z-A"]).map((order) => {
              return (
                <option key={order} value={order}>
                  {order}
                </option>
              );
            })}
          </select>
        </FieldsSideBar>

        {/* Population order filter */}
        <FieldsSideBar id={"orderPopulation"} text={"Order by Population"}>
          <select
            ref={orderPopulation}
            onChange={handlePopulationSelect}
            defaultValue={"None"}
            className={style.select}
            id="orderPopulation"
            >
            {/* Options for population order filter */}
            <option value="None">None</option>
            {Array.from(["Ascendent", "Descendent"]).map((order) => {
              return (
                <option key={order} value={order}>
                  {order}
                </option>
              );
            })}
          </select>
        </FieldsSideBar>

        {/* Activity filter */}
        <FieldsSideBar id={"activities"} text={"Order by Activity"}>
          <select
            onChange={handleActivitySelect}
            ref={orderActivity}
            defaultValue={"All"}
            className={style.select}
            id="activities"
            >
            {/* Options for activity filter */}
            <option value="All">All</option>
            {activities.all.map((activity) => {
              return (
                <option key={activity.id} value={activity.name}>
                  {activity.name}
                </option>
              );
            })}
          </select>
        </FieldsSideBar>
      </aside>
            </div>
    </>
  );
};

export default SideBar;

