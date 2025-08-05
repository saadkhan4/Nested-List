// Getting list via ClassName
const getList = document.getElementsByClassName("list");

// Created First Unordered list
const first_ul = document.createElement("ul");
getList[0].appendChild(first_ul);

// Inserting data.
const firstList = document.createElement("li");
firstList.innerText = "BMW";
first_ul.appendChild(firstList);

const secondList = document.createElement("li");
secondList.innerText = "VOLVO";
first_ul.appendChild(secondList);

const thirdList = document.createElement("li");
thirdList.innerText = "MERCEDES BENZ";
first_ul.appendChild(thirdList);

// Created Nested Unordered List.
const nested_ul = document.createElement("ul");
secondList.appendChild(nested_ul);

// Inserting data into nested list.
const fourth_list = document.createElement("li");
fourth_list.innerText = "HONDA";
nested_ul.appendChild(fourth_list);

const fifth_list = document.createElement("li");
fifth_list.innerText = "FERRARI";
nested_ul.appendChild(fifth_list);

const sixth_list = document.createElement("li");
sixth_list.innerText = "MITSUBISHI MOTORS";
nested_ul.appendChild(sixth_list);
