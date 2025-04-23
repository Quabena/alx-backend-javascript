// Define a structure for Student information
export interface Student {
  givenName: string;
  familyName: string;
  age: number;
  country: string;
}

// Sample Student records
const studentOne: Student = {
  givenName: "Minho",
  familyName: "Kim",
  age: 21,
  country: "Busan, South Korea",
};

const studentTwo: Student = {
  givenName: "Katarzyna",
  familyName: "Nowak",
  age: 23,
  country: "Krakow, Poland",
};

// Collection of Students
const StudentRegistry: Student[] = [studentOne, studentTwo];

// CSS to style the page and table
const cssRules = `
  html {
    height: 100%;
    padding: 0;
  }
  body {
    margin: 10%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: 600;
  }
  td {
    padding: 10px;
    border: 1px solid #888;
    cursor: pointer;
  }
  td:hover {
    background-color: #e0e0e0;
  }
  td:first-child {
    text-align: center;
  }
`;

/**
 * Renders a table of Students on the web page.
 * @param entries List of Student objects to render.
 * @creator Original rewrite by ChatGPT
 */
export const renderStudents = (entries: Student[]): void => {
  const tableElement = document.createElement("table");

  const header = tableElement.createTHead();
  const headerRow = header.insertRow();
  headerRow.innerHTML = "<td>Given Name</td><td>Country</td>";

  const body = tableElement.createTBody();
  entries.forEach((entry) => {
    const row = body.insertRow();
    row.innerHTML = `<td>${entry.givenName}</td><td>${entry.country}</td>`;
  });

  document.body.appendChild(tableElement);
};

// Inject the table and styles
renderStudents(StudentRegistry);

const styleElement = document.createElement("style");
styleElement.textContent = cssRules;
document.head.appendChild(styleElement);

// Set the document title
document.title = "Student Overview";
