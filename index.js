const express = require('express');
const server = express()

const cursos = ['Node JS', 'JavaScript', 'React Native']

server.use(express.json());

server.use((req, res, next) => {
    console.log("Requested by" + req.URL)

    return next();
})

function checkCurso(req, res, next){
 if(!req.body.name){
     return res.status(400).json({ error: "Nome do curso é obrigatório."})
 }

 return next();
}

server.get("/cursos", (req,res )=>{
    return res.json(cursos);
})

server.get('/cursos/:index', (req, res)=>{
    const { index } = req.params;
    return res.json(cursos[index])
})

server.post("/cursos" , checkCurso, (req, res) =>{
    const {name} = req.body;
    cursos.push (name);

    return res.json(cursos)
})

server.put('/cursos/:index', checkCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', (req,res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.send();
})

server.listen(3000)