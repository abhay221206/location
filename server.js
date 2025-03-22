import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());

const alldata1 = [
  { latitude: 26.8262, longitude: 80.9148 },
  { latitude: 26.8262, longitude: 80.9148 }
];

app.post("/post", (req, res) => {
  const data = req.body;
  const newip = {
    latitude: data.latitude,
    longitude: data.longitude,
  };
  alldata1.push(newip);
  res.json(data);
});

console.log(alldata1)

app.get("/get", (req, res) => {
  res.json(alldata1);
});

app.listen(port, () => {
  console.log(`Server is started on port no: ${port}`);
});
