const routes = [
  {
    method: "POST",
    module: "User",
    route: "/api/user/login",
    description: "Validate and Login User.",
  },
  {
    method: "POST",
    route: "/api/products",
    description: "Create a new product",
  },
  {
    method: "GET",
    route: "/api/products/:id",
    description: "Fetch a specific product",
  },
  {
    method: "PUT",
    route: "/api/products/:id",
    description: "Update a product",
  },
  {
    method: "DELETE",
    route: "/api/products/:id",
    description: "Delete a product",
  },
];

const parentElement = document.getElementById("routes");

routes.forEach(({ method, route, description, module }) => {
  const row = document.createElement("tr");

  const methodCell = document.createElement("td");
  methodCell.textContent = method;

  const moduleCell = document.createElement("td");
  moduleCell.textContent = module;

  const routeCell = document.createElement("td");
  routeCell.textContent = route;

  const descCell = document.createElement("td");
  descCell.textContent = description;

  row.appendChild(methodCell);
  row.appendChild(moduleCell);
  row.appendChild(routeCell);
  row.appendChild(descCell);

  parentElement.appendChild(row);
});
