// import { faker } from 'faker'

function getRandomId(min, max) {
  const newMax = max++;
  return Math.floor(Math.random() * (newMax - min) + min);
}

const faker = require('faker');
const threshold = 10;
  let database = { 
    users: [],  
    projects:[], 
    taskStatus:[
      {id:faker.random.uuid(), description: 'completed'},
      {id:faker.random.uuid(), description: 'active'},
      {id:faker.random.uuid(), description: 'new'},
      {id:faker.random.uuid(), description: 'archived'},
      {id:faker.random.uuid(), description: 'standby'},
    ], 
    tasks:[]
  };  

  for (let i = 1; i<= threshold; i++) {
  database.users.push({
    id: faker.random.uuid(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    job: faker.name.jobTitle(),
    about: faker.lorem.paragraph(),
    phone: faker.phone.phoneNumber(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    // You can also use faker.image.people() for image
    image: faker.image.people(), 
    // image: "https://source.unsplash.com/1600x900/?user", 
    country: faker.address.country()
  });
  }

  for (let i = 1; i <= 10; i++){
    database.projects.push({
      id: faker.random.uuid(),
      name: faker.lorem.words(),
    })
  }

 for (let i = 1; i <= 100; i++){
   database.tasks.push({
     id: faker.random.uuid(),
     statusId: database.taskStatus[getRandomId(0, 4)].id,
     assigneeId: database.users[getRandomId(0, 9)].id,
     dueDate: faker.date.future(),
     creationDate: faker.date.recent(),
     title: faker.lorem.words(),
     description: faker.lorem.paragraph(),
     projectId: database.projects[getRandomId(0, 9)].id,
   })
 }
 

  console.log(JSON.stringify(database));