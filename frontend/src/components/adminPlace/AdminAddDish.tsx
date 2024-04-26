"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import dishes from "../mock/mockDishesData";
function AdminAddDish() {
  const [category, setCategory] = useState<string>("");
  const [foodName, setFoodName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string | "">("");
  const [calories, setCalories] = useState<string | "">("");
  const clear = () => {
    setCategory("");
    setFoodName("");
    setCalories("");
    setDescription("");
  };
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const foodIngredients = [
    {
      name: "Flour",
      category: "Baking",
      quantity: "1 cup",
    },
    {
      name: "Sugar",
      category: "Sweeteners",
      quantity: "1/2 cup",
    },
    {
      name: "Eggs",
      category: "Dairy & Eggs",
      quantity: "2",
    },
    {
      name: "Milk",
      category: "Dairy & Eggs",
      quantity: "1/2 cup",
    },
    {
      name: "Salt",
      category: "Spices & Seasonings",
      quantity: "1 teaspoon",
    },
    {
      name: "Vanilla Extract",
      category: "Flavorings",
      quantity: "1 teaspoon",
    },
  ];

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (selectedIngredients.includes(value)) {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== value)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, value]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Selected Ingredients:", selectedIngredients);
    console.log(category, foodName, description, price, calories);
    dishes.push({
      name: foodName,
      price: parseFloat(price as string), // Convert to number
      calories: parseFloat(calories as string),
      category: category,
    });
  };

  return (
    <div className="w-[1000px] absolute left-[23%] px-[30px] py-[30px] rounded-lg top-[23%] flex gap-[4%] bg-gray-600 justify-around opacity-90">
      <div className="w-[30%]">
        <div className="flex w-full py-[100px] justify-center items-center border-gray-100 border-[2px] rounded-lg">
          <div className="flex justify-center items-center w-[40%] h-[200px] border-dashed border-[2px] border-[#F58220] rounded-lg rgba">
            <input className="border-none bg-[#F58220]" type="file" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[60%]">
        <div className="flex w-full  px-[10px] py-[10px] border-gray-100 border-[2px] rounded-lg flex-col gap-[10px]">
          <div className="flex gap-[4%] ">
            <div className="flex flex-col flex-grow gap-[10px]">
              <div>
                <TextField
                  onChange={(e) => {
                    setFoodName(e.target.value);
                  }}
                  value={foodName}
                  label="Food Name"
                  variant="filled"
                  fullWidth
                  sx={{ backgroundColor: "white ", borderRadius: "8px" }}
                />
              </div>
              <div>
                <FormControl
                  variant="filled"
                  sx={{
                    minWidth: 120,
                    backgroundColor: "white ",
                    borderRadius: "8px",
                  }}
                >
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    value={category}
                    onChange={handleChange}
                    labelId="category-label"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {dishes.map((el, i) => {
                      return (
                        <MenuItem value={el.category}>{el.category}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="flex gap-[5px]">
                <input
                  value={calories}
                  onChange={(e) => {
                    setCalories(e.target.value);
                  }}
                  className="rounded-lg px-[10px]"
                  placeholder="Calories"
                  type="number"
                />
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="rounded-lg px-[10px]"
                  placeholder="Price"
                  type="number"
                />
              </div>
            </div>
            <div id="tuhai" className="w-[60%]">
              <input
                className="w-[100%] h-[190px] bg-gray-100 rounded-lg items-start"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                type="text"
              />
            </div>
          </div>
          <div className="w-[100%] h-[190px] flex flex-wrap gap-[10px] bg-gray-100 rounded-lg">
            <form onSubmit={handleSubmit}>
              {foodIngredients.map((el, i) => (
                <div key={i} className="text-black">
                  <input
                    type="checkbox"
                    name={el.name}
                    value={el.name}
                    checked={selectedIngredients.includes(el.name)}
                    onChange={handleCheckboxChange}
                  />
                  <label>{el.name}</label>
                  <br />
                </div>
              ))}
              <button
                className="bg-green-400 px-[10px] py-[5px] rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddDish;
