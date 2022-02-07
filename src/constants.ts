export const SIZES = [5, 10, 15, 20, 25, 30];

export const SORTING_ALGORITHMS = ["Bubble", "Selection", "Insertion"];

export const timeOutInterval = 100;

export const BUBBLE_SORTING_DESC = {
  description:
    "Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.",
  best: "O(n)",
  worst: "O(n²)",
  avarage: "O(n²)",
  complexity: "O(1)",
  stability: "Stable",
};

export const SELECTION_SORTING_DESC = {
  description:
    "Selection sorting is a sorting algorithm that will finds the minimum element and puts it in the begining of the array.",
  best: "O(n²)",
  worst: "O(n²)",
  avarage: "O(n²)",
  complexity: "O(1)",
  stability: "No",
};

export const INSERTION_SORTING_DESC = {
  description:
    "Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.",
  best: "O(n)",
  worst: "O(n²)",
  avarage: "O(n²)",
  complexity: "O(1)",
  stability: "Stable",
};
