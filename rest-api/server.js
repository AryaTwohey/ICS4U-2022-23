import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());

let students = [
  {
    id: 1,
    name: "Fred",
    age: 16,
  },
  {
    id: 2,
    name: "Michael",
    age: 17,
  },
  {
    id: 3,
    name: "Kyle",
    age: 16,
  },
];
let courses = [
  {

  },
  {

  },
  {

  },
]
app.get("/api/students", (req, res) => {
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  //undefined and null == false
  //if there is no student
  if (!student) {
    return res.status(404).send("Student Not Found");
  } else {
    //if we find the studnet, just send it back
    return res.send(student);
  }
});

//we always put posts into the body
app.post("/api/students", (req, res) => {
  //for the name, we are grabbing it from the body, and it is just json so we can use .name
  if (!req.body.name) {
    console.log(req.body.name);
    res.status(400).send("Name is required");
  }

  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  //push the new student to the students array and then send it back
  students.push(student);
  res.send(student);
});

app.put("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  //undefined and null == false
  //if there is no student
  if (!student) {
    return res.status(404).send("Student Not Found");
  }
  student.name = req.body.name;
  student.name = req.body.age;
});

app.delete("/api/studnents/:id", (req,res) =>{
    const student = students.find((s) => s.id === parseInt(req.params.id))
} )

//createEndPoint (routes)
//If they attempt to make a request to /, it will send the response back
// app.get('/', (req,res) => res.send('Hello Fred!') )
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

app.get('/api/courers', (req,res) => {
  res.send.courses;
  let courses = [
    {
      id: 1,
      name:'Introduction to Computer Science',
      instructor: 'John Doe'
    },
    {
      id: 2,
      name:'Web Development Fundamentals',
      instructor: 'Jane Doe'
    },    {
      id: 3,
      name:'Database Sytems',
      instructor: 'Bob Johnson'
    }
  ]
})

