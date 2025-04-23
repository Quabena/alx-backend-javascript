// main.ts

interface LearnerProfile {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const learnerOne: LearnerProfile = {
  firstName: "Kwame",
  lastName: "Mensah",
  age: 22,
  location: "Accra",
};

const learnerTwo: LearnerProfile = {
  firstName: "Ama",
  lastName: "Owusu",
  age: 21,
  location: "Kumasi",
};

const enrolledLearners: LearnerProfile[] = [learnerOne, learnerTwo];

// Create a table element
const tableElement: HTMLTableElement = document.createElement("table");

// Loop through each learner and create rows
enrolledLearners.forEach((student: LearnerProfile): void => {
  const rowElement: HTMLTableRowElement = document.createElement("tr");

  const nameCell: HTMLTableCellElement = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  rowElement.appendChild(nameCell);
  rowElement.appendChild(locationCell);
  tableElement.appendChild(rowElement);
});

// Append the table to the document body
document.body.appendChild(tableElement);

