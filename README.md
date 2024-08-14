Here’s the revised README with the correct information:

---

# ORM E-commerce Back End

## Description

The ORM E-commerce Back End project is a back-end application for an e-commerce site. It uses Node.js, Express.js, Sequelize, and MySQL to handle database operations with an Object-Relational Mapping (ORM) approach. The application provides RESTful API routes to manage categories, products, and tags within the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [Built With](#built-with)
- [Mockup](#mockup)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Acknowledgement](#acknowledgement)

## Installation

#### Repo link:

[https://github.com/Robert-Ulloa/ORM-E-commerce-Back-End](https://github.com/Robert-Ulloa/ORM-E-commerce-Back-End)

Clone the repository:

```sh
git clone https://github.com/Robert-Ulloa/ORM-E-commerce-Back-End
cd ORM-E-commerce-Back-End
```

Install dependencies:

```sh
npm install
```

Set up the MySQL database:

1. Ensure MySQL is installed and running on your system.
2. Create a `.env` file in the root of the project with the following contents:

```makefile
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'
```

Create the database:

```sh
mysql -u root -p
```

Run the database migrations and seed the database:

```sh
npm run seed
```

## Usage

Start the server:

```sh
node server.js
```

The application will be running at [http://localhost:3001](http://localhost:3001).

## Database Schema

The database schema includes four main tables: `category`, `product`, `tag`, and `product_tag`.

- **category**
  - id: INTEGER PRIMARY KEY AUTO_INCREMENT
  - category_name: VARCHAR(30) NOT NULL

- **product**
  - id: INTEGER PRIMARY KEY AUTO_INCREMENT
  - product_name: VARCHAR(30) NOT NULL
  - price: DECIMAL NOT NULL
  - stock: INTEGER NOT NULL DEFAULT 10
  - category_id: INTEGER NOT NULL REFERENCES category(id)

- **tag**
  - id: INTEGER PRIMARY KEY AUTO_INCREMENT
  - tag_name: VARCHAR(30)

- **product_tag**
  - id: INTEGER PRIMARY KEY AUTO_INCREMENT
  - product_id: INTEGER NOT NULL REFERENCES product(id)
  - tag_id: INTEGER NOT NULL REFERENCES tag(id)

## Features

- View all categories
- View all products
- View all tags
- Add a category
- Add a product
- Add a tag
- Update a category
- Update a product
- Update a tag
- Delete a category
- Delete a product
- Delete a tag

## Built With

- Node.js
- Express.js
- MySQL
- Sequelize
- dotenv

## Mockup

[Click here to watch the mockup video](https://drive.google.com/file/d/10dtT_Oof9DE2wr25yJrkiMgOfD6DFIXq/view?usp=sharing)  
By using the /preview link in the Google Drive URL, the video can be embedded and playable directly in the README file.

https://drive.google.com/file/d/10dtT_Oof9DE2wr25yJrkiMgOfD6DFIXq/view?usp=sharing

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Questions

For any questions, please contact me with the information below:

- GitHub: [Robert-Ulloa](https://github.com/Robert-Ulloa)
- Email: roanuc8@gmail.com
- LinkedIn: [Roberto Ulloa](https://www.linkedin.com/in/roberto-ulloa/)

## Acknowledgement

I used an AI assistant to debug and explore better coding options.

---

This should now correctly reflect your project details.