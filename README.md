# Vehicle-Stats-2.0
## Overview

Vehicle Stats 1.0 will show new car lovers or motorcycle lovers their favorite vehicle stats, they can show also different model types, engine types and much more! 


<br>

## MVP

- Let user add new vehicles 
- 1 association between one table
- Implement Full CRUD  

<br>

### Goals

- Complete Backend in 1 day
- Have CRUD in the backend complete
- Start having components working on day 2
- Implement Full Authentication
- Implement Dark mode

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |    React will implemented for frontend     |
|   React Router   |  Router will be implemented for components |
| Ruby  on Rails   | Ruby on Rails will be used for making my database in the Backend|

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

https://whimsical.com/QkiBNmyqzEcS9p3cFUK2sy

- Tablet Resource Index

https://whimsical.com/QkiBNmyqzEcS9p3cFUK2sy

- Mobile Resource Index

https://whimsical.com/QkiBNmyqzEcS9p3cFUK2sy

#### Component Tree

https://www.draw.io/#G181hsTkJWCBIkzijBUEhuDQ41WvZ3vsy4

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure
app/
 |__channels
 |__controllers
 |__jobs
 |__mailers
 |__models/
      |__concerns
      |__ApplicationRecord
      |__Vehicle.rb
      |__Images.rb
  |__views
|__bin
client/
 |__src
  |__ components /
      |__ Add Vehicle.jsx
      |__ Images.jsx
      |__ Header.jsx
      |__ Main.jsx
      |__ Show Vehicle.jsx
      |__ Update Vehicle.jsx
|__ services/
    |__ api-helper.js
    |__ Vehicle.js
      

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    |   class    |   n   |   n   | The header will have a link to Add Vehicle & Add Motorcycle      |
|  Add Vehicle | functional |   y   |   n   | The vehicle form will create vehicle using CRUD                  |
|     Main     | functional |   y   |   y   | This component will handle all CRUD functionality                |
|Update Vehicle| functional |   y   |   n   | This component will let you edit any vehicle                     |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| 3 database tables   |    H     |     3 hrs      |     2 hrs     |     TBD     |
|Add full CRUB backend|    H     |     3 hrs      |     2 hrs     |     TBD     |
|Start rendering data to Frontend |    M     |     4 hrs      |     3 hrs     |     TBD     |
|Render Images with stats|    H     |     4 hrs      |     3 hrs     |     TBD     |
|Add forms to add vehicle|    H     |     3 hrs      |     2 hrs     |     TBD     |
|Add Update to Vehicle|    H     |     4 hrs      |     3hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> https://www.draw.io/#G1Wl4oZFu3ScWbQf1mMjzIutuSr0pG460m

<br>

***

## Post-MVP

- Implement Full Authentication
- Implement Dark mode
- Add nearby dealership to user
- Add Favorite Vehicles

***

## Code Showcase

> ```
   <select
                required
                onChange={this.handleManufacturerChange}
              >
                <option disabled selected>-- Select a Manufacturer --
                </option>
                {this.props.manufacturers.map(manufacturer => (
                  <option value={manufacturer.id}>{manufacturer.name}</option>
                ))}
              </select>
              <select
                required
                onChange={this.handleModelChange}
              >
                <option disabled selected>-- Select a Model --
                </option>
                {this.props.models.map(model => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </select>
              I'm happy with this code because it was a different way to make a drop-down and it's cool
  ```

## Code Issues & Resolutions

> I had a CRUD issue. The unexpected behavior is I can't edit vehicles when I press the button edit but It was resolved and It's functional
