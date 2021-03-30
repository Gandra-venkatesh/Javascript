const menu = [
  {
    id: 1,
    title: "Html",
    category: "frontend",
    price: 15.99,
    img: "./images/html.png",
    desc: `Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser `,
  },
  {
    id: 2,
    title: "Css",
    category: "frontend",
    price: 13.99,
    img: "./images/css.png",
    desc: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`,
  },
  {
    id: 3,
    title: "Javascript",
    category: "frontend",
    price: 6.99,
    img: "./images/js.png",
    desc: `JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.`,
  },
  {
    id: 4,
    title: "ReactJs",
    category: "frontend",
    price: 20.99,
    img: "./images/react.jpg",
    desc: `ReactJS is JavaScript library used for building reusable UI components.It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance `,
  },
  {
    id: 5,
    title: "Php",
    category: "backend",
    price: 22.99,
    img: "./images/php.jpg",
    desc: `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP. `,
  },
  {
    id: 6,
    title: "Python",
    category: "backend",
    price: 18.99,
    img: "./images/python.png",
    desc: `Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.`,
  },
  {
    id: 7,
    title: "NodeJs",
    category: "backend",
    price: 8.99,
    img: "./images/nodejs.png",
    desc: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.  `,
  },
  {
    id: 8,
    title: "Java",
    category: "backend",
    price: 12.99,
    img: "./images/java.png",
    desc: `Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible`,
  },
  {
    id: 9,
    title: "Mysql",
    category: "database",
    price: 16.99,
    img: "./images/mysql.png",
    desc: `MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.`,
  },
  {
    id: 10,
    title: "MangoDB",
    category: "database",
    price: 22.99,
    img: "./images/mangodb.png",
    desc: `MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
